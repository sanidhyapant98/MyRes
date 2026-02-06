const express = require('express')
const { authMiddleware } = require('../middlewares/authMiddleware')
const { createRestController, getRestController } = require('../controllers/restController')
const { roleMiddleware } = require('../middlewares/roleMiddleware')
const restRouter = express.Router()

restRouter.post('/create', authMiddleware, roleMiddleware("admin", "vendor"), createRestController)
restRouter.get('/getAll', authMiddleware, roleMiddleware, getRestController)

module.exports = {
    restRouter
}