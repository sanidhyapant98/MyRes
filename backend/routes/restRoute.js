const express = require('express')
const { authMiddleware } = require('../middlewares/authMiddleware')
const { createRestController, getRestController, getRestByIdController, deleteResByIdController } = require('../controllers/restController')
const { roleMiddleware } = require('../middlewares/roleMiddleware')
const restRouter = express.Router()

restRouter.post('/create', authMiddleware, roleMiddleware("admin", "vendor"), createRestController)
restRouter.get('/getAll', getRestController)
restRouter.get('/get/:id', getRestByIdController)
restRouter.delete('/delete/:id', authMiddleware, roleMiddleware("admin", "vendor"), deleteResByIdController)

module.exports = {
    restRouter
}