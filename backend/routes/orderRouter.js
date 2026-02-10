import express from 'express'
import { placeOrderController, updateOrderStatusController } from '../controllers/orderController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { roleMiddleware } from '../middlewares/roleMiddleware.js'
import { roleRateLimiter } from '../middlewares/roleRateLimiter.js'

const orderRouter = express.Router()

orderRouter.post('/placeOrder', authMiddleware, roleRateLimiter, placeOrderController)
orderRouter.patch('/updateStatus/:id', authMiddleware, roleRateLimiter, roleMiddleware('admin','vendor','driver'), updateOrderStatusController)

export { orderRouter }