import jwt from 'jsonwebtoken'
import { User } from '../model/userModel.js'

const authMiddleware = async (req, res, next)=>{
    try{
        const cookies = req.cookies
        const {token} = cookies
        if(!token){
            throw new Error("Token not valid...")
        }
        const decode = await jwt.verify(token, process.env.JWT_SECRET)
        const {_id} = decode
        const user = await User.findById({_id})
        if(!user){
            throw new Error("User not found...")
        }
        req.user = user
        next()
    }catch(err){
        res.status(500).send("Error: " + err.message)
    }
}

export { authMiddleware }