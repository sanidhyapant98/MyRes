const { Catagory } = require('../model/catagoryModel')
const { updateController } = require('./userController')

const catController = async (req, res) => {
    try {
        const { title, imageUrl } = req.body
        if (!title) {
            return res.status(400).send('Please provide title')
        }

        // create and save category
        const newCatagory = await Catagory.create({ title, imageUrl })
        await newCatagory.save()
        return res.status(201).send('New Catagory created')
    } catch (err) {
        return res.status(500).send('Error : ' + err.message)
    }
}

const catGetAllController = async (req, res)=>{
    try{
        const catagories = await Catagory.find({})
        if(!catagories){
            return res.status(400).send("No catagories found")
        }
        return res.status(200).send({
            message : "The catagories are...",
            totalCat : catagories.length,
            catagories
        })
    }catch(err){
        return res.status(500).send('Error : ' + err.message)
    }
}
 
const catUpdateByIdController = async (req, res)=>{
    try{
        const {id} = req.params
        const {title, imageUrl} = req.body
        const updatedCatagory = await Catagory.findByIdAndUpdate(id, {title, imageUrl}, {new : true})
        if(!updatedCatagory){
            return res.status(404).send("Catagory not updated")
        }
        return res.status(200).send("Catagory Updated successfully")
    }catch(err){
        return res.status(500).send('Error : ' + err.message)
    }
}

const catDeleteByIdController = async (req, res)=>{
    try{
        const {id} = req.params
        if(!id){
            return res.status(404).send("Id not found")
        }
        const catagory = await Catagory.findById(id)
        if(!catagory){
            return res.status(404).send("No catagory found with this id")
        }
        await Catagory.findByIdAndDelete({id})
        return res.status(200).send("Catagory deleted successfully")
    }catch(err){
        return res.status(500).send('Error : ' + err.message)
    }
}

module.exports = {
    catController,
    catGetAllController,
    catUpdateByIdController,
    catDeleteByIdController
}