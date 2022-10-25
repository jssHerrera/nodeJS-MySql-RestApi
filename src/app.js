import express from 'express'
import routerEmployee from './routes/employees.routes.js'
import routerPing from './routes/index.routes.js'

const app = express()

app.use(express.json())
// Router
app.use('/api/employee', routerEmployee)
app.use('/ping', routerPing)

// Routing
app.get('/', (req, res) => {
  res.send('Mi primer servidor con Express. Cursos 💻.');
});

export default app
