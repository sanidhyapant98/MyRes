const userController = async (req, res)=>{
    try{
        res.send("User Data")
    }catch(err){
        res.status(500).send("Error : ", err.message)
    }
}

module.exports = {
    userController
}