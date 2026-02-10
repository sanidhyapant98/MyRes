import express from 'express'
import dotenv from 'dotenv'
import 'colors'
import cookieParser from 'cookie-parser'
import { connectDB } from './config/db.js'
import { authRouter } from './routes/authRouter.js'
import { userRouter } from './routes/userRouter.js'
import { restRouter } from './routes/restRouter.js'
import { catRouter } from './routes/catagoryRouter.js'
import { foodRouter } from './routes/foodRouter.js'
import { orderRouter } from './routes/orderRouter.js'

dotenv.config()

const app = express()

// Parse incoming JSON request bodies
app.use(express.json())

// Parse cookies for auth middleware
app.use(cookieParser())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/restaurant', restRouter)
app.use('/api/v1/catagory', catRouter)
app.use('/api/v1/food', foodRouter)
app.use('/api/v1/order', orderRouter)

const PORT = process.env.PORT || 5000

connectDB()
    .then(() => {
        console.log('DB connection established successfully...'.bgCyan)
        app.listen(PORT, () => {
            console.log(`THE SERVER IS RUNNING ON PORT ${PORT}`.bgWhite)
        })
    })
    .catch((err) => {
        console.error('Cannot connect to DB...', err)
    })