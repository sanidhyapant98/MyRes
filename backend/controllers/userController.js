const { User } = require("../model/userModel")
const bcrypt = require('bcrypt')

const userController = async (req, res)=>{
    try{
        const user = req.user
        if(!user){
            return res.status(500).send("User not found")
        }
        res.send(user)
    }catch(err){
        return res.status(500).send("Error: " + err.message)
    }
}

const updateController = async (req, res)=>{
    try{
        const user = req.user
        if(!user){
            return res.status(404).send("User not found")
        }
        const {userName, phone, address} = req.body
        if(userName){
            user.userName = userName
        }
        if(address){
            user.address = address
        }
        if(phone){
            user.phone = phone
        }
        await user.save()
        res.status(200).send("User updated successfully")
    }catch(err){
        return res.status(500).send("Error: " + err.message)
    }
}

const updatePassword = async (req, res)=>{
    try{
        const {oldPass, newPass} = req.body
        if(!oldPass || !newPass){
            return res.status(400).send("Both passwords required")
        }
        const user = req.user
        if(!user){
            return res.status(404).send("User not found")
        }
        const isMatch = await bcrypt.compare(oldPass, user.password)
        if(!isMatch){
            return res.status(400).send("Password does not match")
        }
        const salt = await bcrypt.genSaltSync(10)
        const hashedPass = await bcrypt.hash(newPass, salt)
        user.password = hashedPass
        await user.save()
        res.status(200).send("Password updated successfully")
    }catch(err){
        return res.status(500).send("Error: " + err.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.user._id)
        if(!user){
            return res.status(404).send("User not found")
        }
        res.status(200).send("User deleted successfully")
    } catch(err) {
        return res.status(500).send("Error: " + err.message)
    }
}

module.exports = {
    userController,
    updateController,
    updatePassword,
    deleteUser
}