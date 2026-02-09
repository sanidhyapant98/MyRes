import express from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { roleMiddleware } from '../middlewares/roleMiddleware.js'
import { createFoodController, getAllFoodsController, getFoodByIdController, getFoodByRestaurantController, updateFoodController } from '../controllers/foodController.js'

const foodRouter = express.Router()

foodRouter.post('/create', authMiddleware, roleMiddleware("admin", "vendor"), createFoodController)
foodRouter.get('/getAll', getAllFoodsController)
foodRouter.get('/get/:id', getFoodByIdController)
foodRouter.get('/restaurant/:restId/foodItem/:foodId', getFoodByRestaurantController)
foodRouter.patch('/updateFood/:id', authMiddleware, roleMiddleware("admin", "vendor"), updateFoodController)

export { foodRouter }