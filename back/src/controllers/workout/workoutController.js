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


// @desc    Create update workout
// @route   PUT /api/workouts/
// @access  Private
const updateWorkout = asyncHandler(async(req, res) => {
  const { name, exercisesID, workoutID } = req.body

  const workout = await WorkoutCollection.findById(workoutID)

  if (!workout) {
    res.status(404)
    throw new Error('Данная тренировка не найдена!')
  }

  workout.name = name
  workout.exercises = exercisesID

  const updatedWorkout = await workout.save()

  res.json(updatedWorkout)
})

export { createNewWorkout, getWorkout, updateWorkout }

