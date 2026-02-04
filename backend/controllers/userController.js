const { User } = require("../model/userModel")

const userController = async (req, res)=>{
    try{
        const user = req.user
        if(!user){
            res.status(500).send("User not found")
        }
        res.send(user)
        res.send("User Data")
    }catch(err){
        res.status(500).send("Error : ", err.message)
    }
}

module.exports = {
    userController
}