import {Router} from 'express'
const routerEmployee = Router()
import {getEmployee, getEmployeeId, postEmployee, putEmployee, deletEmployee} from '../controllers/employees.controller.js'

// ============================================================================
/* A route that returns the information of the courses of matematicas. */


routerEmployee.get('/', getEmployee)
routerEmployee.get('/:id', getEmployeeId)
routerEmployee.post('/', postEmployee)
routerEmployee.patch('/:id', putEmployee)
routerEmployee.delete('/:id', deletEmployee)


export default routerEmployee
