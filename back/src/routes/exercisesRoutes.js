import express from 'express'
import protect from '../middleware/authMiddleware.js';
import addNewExercises from '../controllers/exercises/exercisesController.js';


const router = express.Router()

router.route('/').post(protect, addNewExercises)

export default router