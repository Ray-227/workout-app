import mongoose from 'mongoose'


const { ObjectId } = mongoose.Schema

const exercisesLogSchema = mongoose.Schema({
  user: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  exercises: {
    type: ObjectId,
    ref: 'Exercises',
    required: true
  },
  completed: { type: Boolean, default: false },
  times: [{
    weight: { type: Number, required: true },
    repeat: { type: Number, required: true },
    completed: { type: Boolean, default: false },
  }],
  workoutLog: {
    type: ObjectId,
    ref: 'WorkoutLog',
    required: true
  },
}, {
  minimize: false,
  timestamp: true,
})

const ExercisesLog = mongoose.model('ExercisesLog', exercisesLogSchema)

export default ExercisesLog
