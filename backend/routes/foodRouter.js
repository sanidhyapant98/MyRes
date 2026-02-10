import express from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { roleMiddleware } from '../middlewares/roleMiddleware.js'
import { createFoodController, getAllFoodsController, getFoodByIdController, getFoodByRestaurantController, updateFoodController } from '../controllers/foodController.js'
import { readLimiter } from '../middlewares/rateLimiterMiddleware.js'
import { roleRateLimiter } from '../middlewares/roleRateLimiter.js'

const foodRouter = express.Router()

foodRouter.post('/create', authMiddleware, roleRateLimiter, roleMiddleware("admin", "vendor"), createFoodController)
foodRouter.get('/getAll', readLimiter, getAllFoodsController)
foodRouter.get('/get/:id', readLimiter, getFoodByIdController)
foodRouter.get('/restaurant/:restId/foodItem/:foodId', readLimiter, getFoodByRestaurantController)
foodRouter.patch('/updateFood/:id', authMiddleware, roleRateLimiter, roleMiddleware("admin", "vendor"), updateFoodController)

export { foodRouter }