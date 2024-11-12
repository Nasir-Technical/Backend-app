// routes/deliveryAgentRoutes.js
const express = require('express');
const DeliveryAgent = require('../models/DeliveryAgent');
const Order = require('../models/Order');
const router = express.Router();

// Add a new Delivery Agent
router.post('/add', async (req, res) => {
  const { name, phone, currentLocation } = req.body;
  try {
    const agent = new DeliveryAgent({ name, phone, currentLocation });
    await agent.save();
    res.status(201).json({ message: 'Delivery agent added successfully', agent });
  } catch (error) {
    res.status(400).json({ error: 'Failed to add delivery agent' });
  }
});

// Assign Order to Delivery Agent
router.put('/assign/:agentId/:orderId', async (req, res) => {
  try {
    const agent = await DeliveryAgent.findById(req.params.agentId);
    const order = await Order.findById(req.params.orderId);
    if (!agent || !order) return res.status(404).json({ error: 'Agent or Order not found' });

    agent.ordersAssigned.push(order);
    agent.status = 'on_delivery';
    await agent.save();

    order.status = 'out_for_delivery';
    await order.save();

    res.status(200).json({ message: 'Order assigned to delivery agent', agent });
  } catch (error) {
    res.status(400).json({ error: 'Failed to assign order' });
  }
});

module.exports = router;
