const { User } = require("../model/userModel")

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
        //addidng user
        const user = await User.create({
            userName,
            email,
            password,
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
        const {email, password} = req.body
        if(!email || !password){
            res.status(500).send("Provide email and password")
        }
        const user = await User.findOne({email})
        if(!user){
            res.status(500).send("User not found")
        }
        res.status(201).send("Logged in successfully")
    }catch(err){
        console.error("Login error:", err.message)
		return res.status(500).send("Error: " + err.message)
    }
}

module.exports = {signupController, loginController}