// models/DeliveryAgent.js
const mongoose = require('mongoose');

const deliveryAgentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  currentLocation: { type: String, required: true },
  ordersAssigned: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  status: {
    type: String,
    enum: ['available', 'on_delivery', 'delivered'],
    default: 'available'
  }
});

module.exports = mongoose.model('DeliveryAgent', deliveryAgentSchema);
