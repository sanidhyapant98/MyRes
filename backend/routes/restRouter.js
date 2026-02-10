import express from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { createRestController, getRestController, getRestByIdController, deleteResByIdController } from '../controllers/restController.js'
import { roleMiddleware } from '../middlewares/roleMiddleware.js'
import { readLimiter } from '../middlewares/rateLimiterMiddleware.js'

const restRouter = express.Router()

restRouter.post('/create', authMiddleware, roleMiddleware("admin", "vendor"), createRestController)
restRouter.get('/getAll', readLimiter, getRestController)
restRouter.get('/get/:id', readLimiter, getRestByIdController)
restRouter.delete('/delete/:id', authMiddleware, roleMiddleware("admin", "vendor"), deleteResByIdController)

export { restRouter }