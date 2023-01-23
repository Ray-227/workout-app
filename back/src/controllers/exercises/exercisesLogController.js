import asyncHandler from 'express-async-handler'
import ExercisesLog from '../../models/exercisesLogModel.js';
import { reBuildTimes } from '../../helpres/exercisesLog.js'


// @desc Create new exercises
// @route POST /api/exercises/log
// @access Private
const createNewExercisesLog = asyncHandler(async (req, res) => {
  const { exercisesID, times } = req.body

  const prevExercisesLog = await ExercisesLog.find({
    user: req.user._id,
    exercises: exercisesID,
  }).sort('desc')

  let timesArr = []

  for (let i = 0; i < times; i++) {
    timesArr.push({
      weight: 0,
      repeat: 0,
    })
  }

  const exercisesLog = await ExercisesLog.create({
    user: req.user._id,
    exercises: exercisesID,
    times: timesArr,
  })

  res.json(exercisesLog)
})


// @desc    Get exerciseLog
// @route   GET /api/exercises/log/:id
// @access  Private
const getExercisesLog = asyncHandler(async (req, res) => {
  const exercisesLog = await ExercisesLog.findById(req.params.id).populate('exercises', 'name imageID').lean()

  const prevExercisesLogs = await ExercisesLog.find({
    user: req.user._id,
    exercises: exercisesLog._id,
  }).sort('desc')[0]

  let newTimes = reBuildTimes(exercisesLog)

  if (prevExercisesLogs) newTimes = reBuildTimes(exercisesLog, prevExercisesLogs)

  res.json({
    ...exercisesLog,
    times: newTimes,
  })
})


export { createNewExercisesLog, getExercisesLog }