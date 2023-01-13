import asyncHandler from 'express-async-handler'
import Exercises from '../../models/exercisesModel.js';


// @desc Add new exercises
// @route POST /api/exercises
// @access Private
const addNewExercises = asyncHandler(async (req, res) => {
  const { name, times, image } = req.body

  const exercise = await Exercises.create({ name, times, image })

  res.json(exercise)
})


export { addNewExercises }