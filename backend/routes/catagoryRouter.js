const express = require('express')
const { authMiddleware } = require('../middlewares/authMiddleware')
const { roleMiddleware } = require('../middlewares/roleMiddleware')
const { catController, catGetAllController, catUpdateByIdController } = require('../controllers/catagoryController')
const catRouter = express.Router()

catRouter.post('/create', authMiddleware, roleMiddleware("admin", "vendor"), catController)
catRouter.get('/getAll', catGetAllController)
catRouter.put('/update/:id', authMiddleware, roleMiddleware("admin", "vendor"), catUpdateByIdController)

module.exports = {
    catRouter
}