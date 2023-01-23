import express from 'express'
import protect from '../middleware/authMiddleware.js';
import { createNewExercises } from '../controllers/exercises/exercisesController.js';
import { createNewExercisesLog, getExercisesLog } from '../controllers/exercises/exercisesLogController.js';


const router = express.Router()

router.route('/').post(protect, createNewExercises)
router.route('/log').post(protect, createNewExercisesLog)
router.route('/log/:id').get(protect, getExercisesLog)

export default router