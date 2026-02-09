import express from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { roleMiddleware } from '../middlewares/roleMiddleware.js'
import { catController, catGetAllController, catUpdateByIdController } from '../controllers/catagoryController.js'

const catRouter = express.Router()

catRouter.post('/create', authMiddleware, roleMiddleware("admin", "vendor"), catController)
catRouter.get('/getAll', catGetAllController)
catRouter.put('/update/:id', authMiddleware, roleMiddleware("admin", "vendor"), catUpdateByIdController)

export { catRouter }