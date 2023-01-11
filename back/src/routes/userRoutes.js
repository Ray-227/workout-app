import express from 'express'
import { getUserProfile } from '../controllers/user/profileController.js';
import { authUser } from '../controllers/user/authController.js';
import { registerUser } from '../controllers/user/registerController.js';
import protect from '../middleware/authMiddleware.js';


const router = express.Router()

router.route('/profile').get(protect, getUserProfile)
router.route('/login').post(authUser)
router.route('/').post(registerUser)

export default router