const roleMiddleware = (...allowedRoles) =>{
    return (req, res, next)=>{
        try{
            const user = req.user
            if(!user){
                return res.status(401).send("Unauthorized")
            }
            if(!allowedRoles.includes(user.userType)){
                return res.status(401).send("Access denied")
            }
            next()
        }catch(err){
            return res.status(500).send("Error : " + err.message)
        }
    }
}

module.exports = {
    roleMiddleware
}