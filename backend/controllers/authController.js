import { User } from "../model/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { profileValidation } from "../utils/validation.js";

const signupController = async (req, res)=>{
    try{
        const validation = profileValidation(req.body)
        if(!validation.valid){
            return res.status(400).json(
                { success: false,
                  errors: validation.errors 
                }
            )
        }
        const {userName, email, password, phone, address, userType} = req.body
        //check existing user
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).send("User already exists")
        }
        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);
        //adding user with hashed password
        const user = await User.create({
            userName,
            email,
            password: hashedPass,
            phone,
            address, 
            userType
            })
            await user.save()
            return res.status(201).send("User registered successfully")
    }catch(err){
        console.error("Signup error:", err.message)
        return res.status(500).send("Error: " + err.message)
    }
}

const loginController = async (req, res)=>{
    try{
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if(!user){
            return res.status(401).send('Invalid credentials')
        }
        const checkPassword = await bcrypt.compare(password, user.password)
        if(checkPassword){
            const token = await jwt.sign({ _id : user._id}, process.env.JWT_SECRET, {expiresIn : "100d"})
            res.cookie("token", token)
            return res.status(200).send({success: true, user})
        }else{
            return res.status(401).send('Invalid credentials')
        }
    }catch(err){
        console.error("Login error:", err.message)
        return res.status(500).send("Error: " + err.message)
    }
}

export { signupController, loginController };