import asyncHandler from 'express-async-handler'
import ExercisesLog from '../../../models/exercisesLogModel.js'


// @desc    Update exercises log
// @route   PUT /api/exercises/log
// @access  Private
export const updateExercisesLog = asyncHandler(async (req, res) => {
  const { logID, timeIndex, key, value } = req.body

  const currentLog = await ExercisesLog.findById(logID)

  if (!currentLog) {
    res.status(404)
    throw new Error('Данный лог не найден')
  }

  let newTimes = currentLog.times

  if ((!timeIndex && timeIndex !== 0) || !key || (!value && value !== false)) {
    res.status(404)
    throw new Error('Вы указали не все поля')
  }

  newTimes[timeIndex][key] = value

  currentLog.times = newTimes

  const updatedLog = await currentLog.save()

  res.json(updatedLog)
})


// @desc    Update exercises log
// @route   PUT /api/exercises/log/complete
// @access  Private
export const updateCompletedExercisesLog = asyncHandler(async (req, res) => {
  const { logID, completed } = req.body

  const currentLog = await ExercisesLog.findById(logID).populate('exercises', 'workout')

  if (!currentLog) {
    res.status(404)
    throw new Error('Данный лог не найден')
  }

  currentLog.completed = completed

  const updatedLog = await currentLog.save()

  res.json(updatedLog)
})
