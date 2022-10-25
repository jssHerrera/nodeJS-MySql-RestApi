import {Router} from 'express'
import {ping} from '../controllers/index.controller.js'
const routerPing = Router()


// pool.query retorna una promise (asincrono)
routerPing.get("/", ping);

export default routerPing
