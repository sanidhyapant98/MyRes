const { Restaurant } = require("../model/restaurantModel")

const createRestController = async (req, res)=>{
    try{
        const {title, imageUrl, foods, time, pickup, delivery, isOpen, rating, ratingCount, code } = req.body
        if(!title){
            return res.status(400).send("Please provide title")
        }
        const newRestaurant = await Restaurant.create({
            title, imageUrl, foods, time, pickup, delivery, isOpen, rating, ratingCount, code 
        })
        await newRestaurant.save()
        res.status(200).send("New Restaurant created successfully")
    }catch(err){
        return res.status(500).send("Error : " + err.message)
    }
}

const getRestController = async (req, res)=>{
    try{
        
    }catch(err){
        return res.status(500).send("Error : " + err.messgae)
    }
}

module.exports = {
    createRestController,
    getRestController
}