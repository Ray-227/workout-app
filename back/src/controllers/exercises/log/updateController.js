import asyncHandler from 'express-async-handler'
import ExercisesLog from '../../../models/exercisesLogModel.js'


// @desc    Update exercisesLog
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

  if (!timeIndex && timeIndex !== 0 || !key || !value) {
    res.status(404)
    throw new Error('Вы указали не все поля')
  }

  newTimes[timeIndex][key] = value

  currentLog.times = newTimes

  const updatedLog = await currentLog.save()

  res.json(updatedLog)
})
