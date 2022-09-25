import express from 'express'
import pino from 'pino-http'
import knex from 'knex'
import swaggerUI from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import { notes } from './routes/notes.js'
import { projects } from './routes/projects.js'
import { knexConfig } from './db/knexfile.js'

const app = express()
const port = 3000

const apiSpec = swaggerJsdoc({
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Guildhall API',
      version: '1.0.0',
    }
  },
  apis: ['./routes/*.js']
})

app.use(pino())

app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(apiSpec))

app.use('/api/v1/notes', notes)
app.use('/api/v1/projects', projects)

app.listen(port, () => {
  console.log('Server start')
})
