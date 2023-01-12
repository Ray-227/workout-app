import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema

const workoutSchema = mongoose.Schema({
  name: { type: String, required: true },
  exercises: [{
    type: ObjectId,
    ref: 'Exercises',
    required: true,
  }],
}, {
  minimize: false,
  timestamp: true,
})

const WorkoutCollection = mongoose.model('Workout', workoutSchema)

export default WorkoutCollection