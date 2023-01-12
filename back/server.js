import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import colors from 'colors'

/* Config */
import connectDB from './src/config/db.js';
/* Middleware */
import { errorHandler, notFound } from './src/middleware/errorMiddleware.js'
/* Routes */
import userRoutes from './src/routes/userRoutes.js';
import exercisesRoutes from './src/routes/exercisesRoutes.js';
import workoutRoutes from './src/routes/workoutRoutes.js';


dotenv.config()

connectDB()

const app = express()
if (process.env.NODE_ENV === 'DEV') app.use(morgan('dev'))
app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/exercises', exercisesRoutes)
app.use('/api/workouts', workoutRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)