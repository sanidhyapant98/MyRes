const express = require('express')
const { authMiddleware } = require('../middlewares/authMiddleware')
const { createRestController, getRestController } = require('../controllers/restController')
const restRouter = express.Router()

restRouter.post('/create', authMiddleware, createRestController)
restRouter.get('/getAll', authMiddleware, getRestController)

module.exports = {
    restRouter
}