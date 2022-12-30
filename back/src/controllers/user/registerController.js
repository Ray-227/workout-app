import User from '../../models/userModel.js';
import asyncHandler from 'express-async-handler';


// @desc POST Register user
// @route POST /api/users/
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const isFindUser = await User.findOne({ email })

  if (isFindUser) {
    res.status(400)
    throw new Error('Данный пользователь уже зарегистирован')
  }

  const user = await User.create({ email, password })

  res.json(user)
})