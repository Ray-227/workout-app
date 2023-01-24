import asyncHandler from 'express-async-handler';
import workoutLogModel from '../../models/workoutLogModel.js';
import WorkoutCollection from '../../models/workoutModel.js';
import ExercisesLog from '../../models/exercisesLogModel.js';
import WorkoutLog from '../../models/workoutLogModel.js';


// @desc    Create new workout log
// @route   POST /api/workouts/log
// @access  Private
export const createNewWorkoutLog = asyncHandler(async (req, res) => {
  const { workoutID } = req.body

  const user = req.user._id

  const workout = await WorkoutCollection.findById(workoutID).populate('exercises')

  if (!workout) {
    res.status(404)
    throw  new Error('Тренировка не найдена')
  }

  const workoutLog = await workoutLogModel.create({
    user: req.user._id,
    workout: workoutID,
  })

  const logs = workout.exercises.map(ex => {
    let timesArray = []

    for (let i = 0; i < ex.times; i++) {
      timesArray.push({
        weight: 0,
        repeat: 0,
      })
    }

    return {
      user,
      exercises: ex._id,
      times: timesArray,
      workoutLog: workoutLog._id,
    }
  })

  const createExLogs = await ExercisesLog.insertMany(logs)

  const exLogIDs = createExLogs.map(log => log._id)

  const foundWorkoutLog = await WorkoutLog.findById(workoutLog._id)

  foundWorkoutLog.exercisesLogs = exLogIDs

  const updatedWorkoutLog = await foundWorkoutLog.save()


  res.json(updatedWorkoutLog)
})


// @desc    Get workout log
// @route   GET /api/workouts/log/:id
// @access  Private
export const getWorkoutLogByID = asyncHandler(async (req, res) => {
  const workoutLog = await WorkoutLog.findById(req.params.id)
    .populate('workout')
    .populate({
      path: 'exercisesLog',
      populate: {
        path: 'exercises'
      }
    }).lean()

  const minutes = Math.ceil(workoutLog.workout.exercises.length * 3.7)

  res.json({ ...workoutLog, minutes })
})


// @desc    Update workout log completed
// @route   PUT /api/workouts/log/completed
// @access  Private
export const updateCompletedWorkoutLog = asyncHandler(async (req, res) => {
  const { logID } = req.body

  const currentLog = await WorkoutLog.findById(logID)

  if (!currentLog) {
    res.status(404)
    throw new Error('Данный лог не найден!')
  }

  currentLog.completed = true

  const updatedLog = await currentLog.save()

  res.json(updatedLog)
})