const express = require('express')
const { userController, updateController, updatePassword } = require('../controllers/userController')
const { authMiddleware } = require('../middlewares/authMiddleware')
const userRouter = express.Router()

userRouter.get('/getUser', authMiddleware, userController)
userRouter.patch('/updateUser', authMiddleware, updateController)
userRouter.patch('/updatePassword', authMiddleware, updatePassword)

module.exports = {
    userRouter
}