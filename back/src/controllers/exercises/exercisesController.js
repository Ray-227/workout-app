import asyncHandler from 'express-async-handler'
import Exercises from '../../models/exercisesModel.js';


// @desc Create new exercises
// @route POST /api/exercises
// @access Private
const createNewExercises = asyncHandler(async (req, res) => {
  const { name, times, image } = req.body

  const exercise = await Exercises.create({ name, times, image })

  res.json(exercise)
})


export { createNewExercises }