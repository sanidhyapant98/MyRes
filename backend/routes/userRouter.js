import express from 'express'
import { userController, updateController, updatePassword, deleteUser } from '../controllers/userController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'

const userRouter = express.Router()

userRouter.get('/getUser', authMiddleware, userController)
userRouter.patch('/updateUser', authMiddleware, updateController)
userRouter.patch('/updatePassword', authMiddleware, updatePassword)
userRouter.delete('/deleteUser', authMiddleware, deleteUser)

export { userRouter }