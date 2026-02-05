const { User } = require("../model/userModel")

const userController = async (req, res)=>{
    try{
        const user = req.user
        if(!user){
            res.status(500).send("User not found")
        }
        res.send(user)
    }catch(err){
        res.status(500).send("Error: " + err.message)
    }
}

const updateController = async (req, res)=>{
    try{
        const user = req.user
        if(!user){
            res.status(404).send("User not found")
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
        res.status(500).send("Error: " + err.message)
    }
}

module.exports = {
    userController,
    updateController
}