import express from 'express'
import protect from '../middleware/authMiddleware.js';
import { addNewExercises, getExercises } from '../controllers/exercises/exercisesController.js';
import { addNewExercisesLog } from '../controllers/exercises/exercisesLogController.js';


const router = express.Router()

router.route('/').post(protect, addNewExercises)
router.route('/log').post(protect, addNewExercisesLog)

export default router