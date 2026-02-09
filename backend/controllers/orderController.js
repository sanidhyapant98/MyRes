import { Order } from '../model/orderModel.js'

const placeOrderController = async (req, res) => {
    try {
        const { foods, payment, buyer } = req.body
        if (!foods || !Array.isArray(foods) || foods.length === 0) {
            return res.status(400).send('Please provide foods for the order')
        }
        if (!buyer) {
            return res.status(400).send('Please provide buyer id')
        }
        // Normalize foods: allow array of ids or array of { food, quantity }
        const normalizedFoods = foods.map((item) => {
            if (typeof item === 'string' || typeof item === 'object' && item.food && !item.quantity) {
                return {
                    food: typeof item === 'string' ? item : item.food,
                    quantity: item.quantity || 1
                }
            }
            if (typeof item === 'object' && item.food) {
                return {
                    food: item.food,
                    quantity: item.quantity || 1
                }
            }
            // fallback: treat as food id string
            return { food: item, quantity: 1 }
        })
        const newOrder = await Order.create({
            foods: normalizedFoods,
            payment: payment || {},
            buyer
        })
        return res.status(201).send({ message: 'Order placed successfully', newOrder })
    } catch (err) {
        return res.status(500).send('Error : ' + err.message)
    }
}

const updateOrderStatusController = async (req, res)=>{
    try{
        const { id } = req.params
        const { status } = req.body
        if(!id){
            return res.status(400).send('Order id is required')
        }
        if(!status){
            return res.status(400).send('Status is required')
        }
        const allowed = ['preparing', 'prepared', 'on the way', 'delivered']
        if(!allowed.includes(status)){
            return res.status(400).send('Invalid status')
        }
        const updated = await Order.findByIdAndUpdate(id, { status }, { new: true })
        if(!updated){
            return res.status(404).send('Order not found')
        }
        return res.status(200).send({ message: 'Order status updated', updated })
    }catch(err){
        return res.status(500).send('Error : ' + err.message)
    }
}

export { placeOrderController, updateOrderStatusController }