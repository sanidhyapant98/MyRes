const express = require('express')
const { userController } = require('../controllers/userController')
const { authMiddleware } = require('../middlewares/authMiddleware')
const userRouter = express.Router()

userRouter.get('/getUser', authMiddleware, userController)

module.exports = {
    userRouter
}