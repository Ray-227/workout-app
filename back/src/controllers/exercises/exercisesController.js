import asyncHandler from 'express-async-handler'
import Exercises from '../../models/exercisesModel.js';
import WorkoutCollection from '../../models/workoutModel.js';


// @desc Create new exercises
// @route POST /api/exercises
// @access Private
const createNewExercises = asyncHandler(async (req, res) => {
  const { name, times, image } = req.body

  const exercise = await Exercises.create({ name, times, image })

  res.json(exercise)
})


// @desc    Update Exercises
// @route   PUT /api/exercises/
// @access  Private
const updateExercises = asyncHandler(async(req, res) => {
  const { name, times, imageID, exercisesID } = req.body

  const exercise = await Exercises.findById(exercisesID)

  if (!exercise) {
    res.status(404)
    throw new Error('Даннеое упражнение не найдено!')
  }

  exercise.name = name
  exercise.times = times
  exercise.imageID = imageID

  const updatedExercise = await exercise.save()

  res.json(updatedExercise)
})


// @desc    Delete Exercises
// @route   DELETE /api/exercises/
// @access  Private
const deleteExercises = asyncHandler(async(req, res) => {
  const { exercisesID } = req.body

  const exercise = await Exercises.findById(exercisesID)

  if (!exercise) {
    res.status(404)
    throw new Error('Даннеое упражнение не найдено!')
  }

  await exercise.remove()

  res.json({ message: "Упражнение уадлено", exercise })
})


export { createNewExercises, updateExercises, deleteExercises }