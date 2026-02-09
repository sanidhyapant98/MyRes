import mongoose from 'mongoose'
import 'colors'

const connectDB = async ()=>{
        await mongoose.connect(process.env.MONGO_URL)
}

export { connectDB }