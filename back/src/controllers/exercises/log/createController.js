import asyncHandler from 'express-async-handler'
import ExercisesLog from '../../../models/exercisesLogModel.js';


// @desc Create new exercises
// @route POST /api/exercises/log
// @access Private
export const createNewExercisesLog = asyncHandler(async (req, res) => {
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