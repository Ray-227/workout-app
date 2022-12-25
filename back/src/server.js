import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import colors from 'colors'


dotenv.config()

const app = express()

if (process.env.NODE_ENV === 'DEV') {
  app.use(morgan('dev'))
}

app.use(express.json())