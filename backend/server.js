const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const cookieParser = require('cookie-parser')
const {connectDB} = require('./config/db')
const { authRouter } = require('./routes/authRouter')
const { userRouter } = require('./routes/userRouter')

dotenv.config()

const app = express()

// Parse incoming JSON request bodies
app.use(express.json())

// Parse cookies for auth middleware
app.use(cookieParser())

app.use('/', authRouter)
app.use('/', userRouter)

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