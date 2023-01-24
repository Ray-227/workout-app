import asyncHandler from 'express-async-handler';
import workoutLogModel from '../../models/workoutLogModel.js';


// @desc    Create new workout log
// @route   POST /api/workouts/log
// @access  Private
export const createNewWorkoutLog = asyncHandler(async (req, res) => {
  const { workoutID } = req.body

  const workoutLog = await workoutLogModel.create({
    user: req.user._id,
    workout: workoutID,
  })

  res.json(workoutLog)
})