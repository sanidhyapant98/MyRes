import express from 'express'
import { signupController, loginController } from '../controllers/authController.js'
import { signupLimiter, loginLimiter } from '../middlewares/rateLimiterMiddleware.js'

const authRouter = express.Router()

authRouter.post('/signup', signupLimiter, signupController)
authRouter.post('/login', loginLimiter, loginController)

export { authRouter }