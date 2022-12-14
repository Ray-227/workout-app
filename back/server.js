import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import colors from 'colors'

import connectDB from './src/config/db.js';
import userRoutes from './src/routes/userRoutes.js';


dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'DEV') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)