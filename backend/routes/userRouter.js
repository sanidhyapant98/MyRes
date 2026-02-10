import express from 'express'
import { userController, updateController, updatePassword, deleteUser } from '../controllers/userController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { roleRateLimiter } from '../middlewares/roleRateLimiter.js'

const userRouter = express.Router()

userRouter.get('/getUser', authMiddleware, roleRateLimiter, userController)
userRouter.patch('/updateUser', authMiddleware, roleRateLimiter, updateController)
userRouter.patch('/updatePassword', authMiddleware, roleRateLimiter, updatePassword)
userRouter.delete('/deleteUser', authMiddleware, roleRateLimiter, deleteUser)

export { userRouter }