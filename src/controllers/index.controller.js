import {pool} from '../conexion.js'

export const ping = async(req, res) => {
  const [result] = await pool.query('SELECT 1 + 1 AS resultado')
  res.json(result[0])
}