import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  foods : [
    {
      food : { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
      quantity : { type: Number, default: 1, min: 1 }
    }
  ],
  payment  : {
    type : mongoose.Schema.Types.Mixed,
    default : {}
  },
  buyer : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    required : true
  },
  status : {
    type : String,
    enum : ['preparing', 'prepared', 'on the way', 'delivered'],
    default : 'preparing'
  }
}, { timestamps : true })

const Order = mongoose.model('Order', orderSchema)

export { Order }
