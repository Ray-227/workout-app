import mongoose from 'mongoose'


const exercisesSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  times: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
}, {
  minimize: false,
  timestamp: true,
})

const Exercises = mongoose.model('Exercises', exercisesSchema)

export default Exercises