const express = require('express')
const { userController, updateController } = require('../controllers/userController')
const { authMiddleware } = require('../middlewares/authMiddleware')
const userRouter = express.Router()

userRouter.get('/getUser', authMiddleware, userController)
userRouter.patch('/updateUser', authMiddleware, updateController)

module.exports = {
    userRouter
}