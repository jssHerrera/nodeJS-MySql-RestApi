import { pool } from "../conexion.js";

// ===================================================
// obtiene empleado
const getEmployee = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM employee");
    res.send(result);
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

const getEmployeeId = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await pool.query("SELECT * FROM employee where id=?", [
      id,
    ]);
    // console.log(result.length === 0);
    if (result.length <= 0) {
      return res.status(404).json({
        message: `se envio la peticion pero acualmente no  contamos esa infomacion para la id: ${id}`,
      });
    }
    res.send(result);
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

// ===================================================
// agrega empleado
const postEmployee = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [result] = await pool.query(
      "INSERT INTO employee(name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.send({
      id: result.insertId,
      name,
      salary,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

// ===================================================
// actualiza empleado
const putEmployee = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const id = req.params.id;

    const [result] = await pool.query(
      "UPDATE employee set name=IFNULL(?, name), salary=IFNULL(?, salary) where id=? ",
      [name, salary, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "employee no fount",
      });
    }
    const [rows] = await pool.query("SELECT * FROM employee where id=?", [id]);

    res.json(rows);
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

// =================================================== elimina empleado
const deletEmployee = async (req, res) => {
  try {
    const id = req.params.id;

    const [result] = await pool.query("DELETE from employee where id=? ", [id]);

    if (result.affectedRows <= 0) {
      return res.status(404).json({
        message: `no existe el id: ${id} - employee no found`,
      });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export { getEmployee, getEmployeeId, postEmployee, putEmployee, deletEmployee };
