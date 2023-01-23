import express from 'express'
import protect from '../middleware/authMiddleware.js'
import { createNewWorkout, getWorkout } from '../controllers/workout/workoutController.js';


const router = express.Router()

router.route('/').post(protect, createNewWorkout)
router.route('/:id').get(protect, getWorkout)

export default router