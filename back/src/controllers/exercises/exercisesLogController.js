import asyncHandler from 'express-async-handler'
import ExercisesLog from '../../models/exercisesLogModel.js';


// @desc Add new exercises
// @route POST /api/exercises/log
// @access Private
const addNewExercisesLog = asyncHandler(async (req, res) => {
  const { exercisesID, times } = req.body

  const prevExercisesLog = await ExercisesLog.find({
    user: req.user._id,
    exercises: exercisesID,
  }).sort('desc')

  let timesArr = []

  if (prevExercisesLog[0]) {
    timesArr = prevExercisesLog[0].times
  } else {
    for (let i = 0; i < times; i++) {
      timesArr.push({
        weight: 0,
        repeat: 0,
      })
    }
  }

  const exercisesLog = await ExercisesLog.create({
    user: req.user._id,
    exercises: exercisesID,
    times: timesArr,
  })

  res.json(exercisesLog)
})


export { addNewExercisesLog }