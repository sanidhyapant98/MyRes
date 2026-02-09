import express from 'express'
import { placeOrderController, updateOrderStatusController } from '../controllers/orderController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { roleMiddleware } from '../middlewares/roleMiddleware.js'

const orderRouter = express.Router()

orderRouter.post('/placeOrder', authMiddleware, placeOrderController)
orderRouter.patch('/updateStatus/:id', authMiddleware, roleMiddleware('admin','vendor','driver'), updateOrderStatusController)

export { orderRouter }