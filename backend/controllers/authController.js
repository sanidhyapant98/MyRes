const { User } = require("../model/userModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signupController = async (req, res)=>{
    try{
        const {userName, email, password, phone, address} = req.body
        //validation
        if(!userName || !email || !password || !phone || !address){
			return res.status(400).send("Provide all fields")
		}
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
            address
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
            throw new Error("Invalid credentials...")
        }
        const checkPassword = await bcrypt.compare(password, user.password)
        if(checkPassword){
            const token = await jwt.sign({ _id : user._id}, "dev@Tinder", {expiresIn : "100d"})
            res.cookie("token", token)
            res.send(user)
        }else{
            throw new Error("Invalid credentials...")
        }
    }catch(err){
        console.error("Login error:", err.message)
		return res.status(500).send("Error: " + err.message)
    }
}

module.exports = {signupController, loginController}