import express from 'express'
import { registerUser } from '../controllers/user/registerController.js';
import { getUserProfile } from '../controllers/user/profileController.js';


const router = express.Router()

router.route('/').post(registerUser)
router.route('/profile').get(getUserProfile)

export default router