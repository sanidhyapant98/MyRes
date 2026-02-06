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
        const restaurants = await Restaurant.find({})
        if(!restaurants){
            return res.status(404).send("No restaurants found")
        }
        return res.status(200).send({
            success : true,
            totalCount : restaurants.length,
            restaurants
        })
    }catch(err){
        return res.status(500).send("Error : " + err.message)
    }
}

const getRestByIdController = async (req, res)=>{
    try{
        const restaurantId = req.params.id
        const restaurant = await Restaurant.findById(restaurantId)
        if(!restaurant){
            return res.status(404).send("Restaurant not found")
        }
        return res.status(200).send({
            message : "Restaurant found successfully",
            restaurant
        })
    }catch(err){
        return res.status(500).send("Error : " + err.message)
    }
}

const deleteResByIdController = async (req, res)=>{
    try{
        const {id} = req.params
        const restaurant = await Restaurant.findByIdAndDelete(id)
        if(!restaurant){
            return res.status(404).send("Couldn't delete, Restaurant not found")
        }
        return res.status(200).send("Restaurant deleted successfully")
    }catch(err){
        return res.status(500).send("Error : " + err.message)        
    }
}

module.exports = {
    createRestController,
    getRestController,
    getRestByIdController,
    deleteResByIdController
}