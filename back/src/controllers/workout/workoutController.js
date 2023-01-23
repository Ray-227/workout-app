import asyncHandler from 'express-async-handler'
import WorkoutCollection from '../../models/workoutModel.js'


// @desc    Create new workout
// @route   POST /api/workouts
// @access  Private
const createNewWorkout = asyncHandler(async(req, res) => {
  const { name, exercisesID } = req.body

  const workout = await WorkoutCollection.create({ name, exercises: exercisesID })

  res.json(workout)
})

// @desc    Get workout
// @route   GET /api/workouts/:id
// @access  Private
const getWorkout = asyncHandler(async(req, res) => {
  const workout = await WorkoutCollection.findById(req.params.id).populate('exercises').lean()
  const minutes = Math.ceil(workout.exercises.length * 3.7)

  res.json({ ...workout, minutes })
})


export { createNewWorkout, getWorkout }

