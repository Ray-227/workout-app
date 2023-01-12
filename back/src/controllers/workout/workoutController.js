import asyncHandler from 'express-async-handler'
import WorkoutCollection from '../../models/workoutModel.js'


// @desc    Add new workout
// @route   POST /api/workouts
// @access  Private
const addNewWorkout = asyncHandler(async(req, res) => {
  const { name, exercisesID } = req.body

  const workout = await WorkoutCollection.create({ name, exercises: exercisesID })

  res.json(workout)
})

export default addNewWorkout

