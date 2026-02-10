import express from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { roleMiddleware } from '../middlewares/roleMiddleware.js'
import { catController, catGetAllController, catUpdateByIdController } from '../controllers/catagoryController.js'
import { readLimiter } from '../middlewares/rateLimiterMiddleware.js'
import { roleRateLimiter } from '../middlewares/roleRateLimiter.js'

const catRouter = express.Router()

catRouter.post('/create', authMiddleware, roleRateLimiter, roleMiddleware("admin", "vendor"), catController)
catRouter.get('/getAll', readLimiter, catGetAllController)
catRouter.put('/update/:id', authMiddleware, roleRateLimiter, roleMiddleware("admin", "vendor"), catUpdateByIdController)

export { catRouter }