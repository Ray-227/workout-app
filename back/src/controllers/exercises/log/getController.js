import asyncHandler from 'express-async-handler'
import ExercisesLog from '../../../models/exercisesLogModel.js';
import { reBuildTimes } from '../../../helpres/exercisesLog.js'


// @desc    Get exerciseLog
// @route   GET /api/exercises/log/:id
// @access  Private
export const getExercisesLog = asyncHandler(async (req, res) => {
  const exercisesLog = await ExercisesLog.findById(req.params.id).populate('exercises', 'name imageID').lean()

  if (!exercisesLog) {
    res.status(404)
    throw new Error('Лог не найден')
  }

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