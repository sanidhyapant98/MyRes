const {Food} = require('../model/foodModel')

const createFoodController = async (req, res)=>{
    try{
        const {title, foodTags, catagory, code, isAvailable, restaurant, description, price, imageUrl, rating} = req.body
        if(!title || !price || !description || !restaurant){
            return res.status(400).send("Please provide all fields")
        }
        const newFood = await Food.create({title, foodTags, catagory, code, isAvailable, restaurant, description, price, imageUrl, rating})
        await newFood.save()
        return res.status(200).send({
            message : "New Food created",
            newFood
        })
    }catch(err){
        return res.status(500).send("Error : " + err.message)
    }
}

const getAllFoodsController = async (req, res)=>{
    try{
        const foods = await Food.find({})
        if(!foods){
            return res.status(404).send("No foods present")
        }
        return res.status(200).send({
            success : true,
            totalFoods : foods.length,
            foods
        })
    }catch(err){
        return res.status(500).send("Error : " + err.message)
    }
}

const getFoodByIdController = async (req, res)=>{
    try{
        const {id} = req.params
        if(!id){
            return res.status(404).send("Please pass the id")
        }
        const food = await Food.findById(id)
        if(!food){
            return res.status(404).send("Food item not found")
        }
        return res.status(200).send({
            success : true,
            food
        })
    }catch(err){
        return res.status(500).send("Error : " + err.message)
    }
}

const getFoodByRestaurantController = async (req, res)=>{
    try{
        const {restId, foodId} = req.params
        if(!restId || !foodId){
            return res.status(404).send("Please provide restId/foodId")
        }
        const foodByRestaurant = await Food.findOne({
            _id : foodId,
            restaurant : restId
        })
        if(!foodByRestaurant){
            return res.status(404).send("Food not found for this restaurant")
        }
        return res.status(200).send({
            success : true,
            foodByRestaurant
        })
    }catch(err){
        return res.status(500).send("Error : " + err.message)
    }
}

const updateFoodController = async (req, res)=>{
    try{
        const {id} = req.params
        if(!id){
            return res.status(400).send("Id not found")
        }
        const food = await Food.findById(id)
        if(!food){
            return res.status(400).send("Food not found")
        }
        const {title, foodTags, catagory, code, isAvailable, restaurant, description, price, imageUrl, rating} = req.body
        const updatedFood = await Food.findByIdAndUpdate(id, {title, foodTags, catagory, code, isAvailable, restaurant, description, price, imageUrl, rating}, {new : true})
        return res.status(200).send({
            success : true,
            updatedFood
        })
    }catch(err){
        return res.status(500).send("Error : " + err.message)
    }
}

const deleteFoodController = async (req, res)=>{
    try{
        const {id} = req.params
        if(!id){
            return res.status(400).send("Id not found")
        }
        const food = await Food.findById(id)
        if(!food){
            return res.status(400).send("Food not found")
        }
        await Food.findByIdAndDelete(id)
        return res.status(200).send("Food deleted")
    }catch(err){
        return res.status(500).send("Error : " + err.message)
    }
}



module.exports = {
    createFoodController,
    getAllFoodsController,
    getFoodByIdController,
    getFoodByRestaurantController,
    updateFoodController,
    deleteFoodController
}