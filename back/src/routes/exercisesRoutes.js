import express from 'express'
import protect from '../middleware/authMiddleware.js';

import { createNewExercises } from '../controllers/exercises/exercisesController.js';

import { createNewExercisesLog } from '../controllers/exercises/log/createController.js';
import { updateCompletedExercisesLog, updateExercisesLog } from '../controllers/exercises/log/updateController.js';

import { getExercisesLog } from '../controllers/exercises/log/getController.js';


const router = express.Router()

router.route('/').post(protect, createNewExercises)

router
  .route('/log')
  .post(protect, createNewExercisesLog)
  .put(protect, updateExercisesLog)

router.route('/log/completed').put(protect, updateCompletedExercisesLog)

router.route('/log/:id').get(protect, getExercisesLog)

export default router