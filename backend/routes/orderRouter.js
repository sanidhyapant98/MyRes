const express = require('express')
const { placeOrderController, updateOrderStatusController } = require('../controllers/orderController')
const { authMiddleware } = require('../middlewares/authMiddleware')
const { roleMiddleware } = require('../middlewares/roleMiddleware')
const orderRouter = express.Router()

orderRouter.post('/placeOrder', authMiddleware, placeOrderController)
orderRouter.patch('/updateStatus/:id', authMiddleware, roleMiddleware('admin','vendor','driver'), updateOrderStatusController)

module.exports = {
    orderRouter
}