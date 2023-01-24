import express from 'express'
import protect from '../middleware/authMiddleware.js'
import {
  createNewWorkout,
  deleteWorkout,
  getWorkouts,
  getWorkoutByID,
  updateWorkout,
} from '../controllers/workout/workoutController.js';
import {
  createNewWorkoutLog,
  getWorkoutLogByID,
  updateCompletedWorkoutLog,
} from '../controllers/workout/workoutLogController.js';


const router = express.Router()

router.route('/')
  .get(protect, getWorkouts)
  .post(protect, createNewWorkout)
  .put(protect, updateWorkout)
  .delete(protect, deleteWorkout)

router.route('/:id').get(protect, getWorkoutByID)

router.route('/log').post(protect, createNewWorkoutLog)

router.route('/log/completed').post(protect, updateCompletedWorkoutLog)

router.route('/log/:id').post(protect, getWorkoutLogByID)

export default router