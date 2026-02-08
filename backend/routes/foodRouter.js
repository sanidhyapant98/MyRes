const express = require ('express')
const { authMiddleware } = require('../middlewares/authMiddleware')
const { roleMiddleware } = require('../middlewares/roleMiddleware')
const { createFoodController, getAllFoodsController, getFoodByIdController, getFoodByRestaurantController, updateFoodController } = require('../controllers/foodController')
const foodRouter = express.Router()

foodRouter.post('/create', authMiddleware, roleMiddleware("admin", "vendor"), createFoodController)
foodRouter.get('/getAll', getAllFoodsController)
foodRouter.get('/get/:id', getFoodByIdController)
foodRouter.get('/restaurant/:restId/foodItem/:foodId', getFoodByRestaurantController)
foodRouter.patch('/updateFood/:id', authMiddleware, roleMiddleware("admin", "vendor"), updateFoodController)

module.exports = {
    foodRouter
}