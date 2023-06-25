import config from '../config'

import express from 'express'
import cors from 'cors'
import path from 'path'

import useRoutes from './routes'

import { log } from './utilities'
import { connectDatabase } from './database'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join('client/dist')))

  app.get('/', (_, res) =>
    res.sendFile(path.resolve('client', 'dist', 'index.html'))
  )
}

app.listen(config.port, () => {
  log.info(`Server running at http://${config.host}:${config.port}`)

  useRoutes(app)
  connectDatabase()
})
