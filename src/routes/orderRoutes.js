// routes/orderRoutes.js
const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Create an Order
router.post('/create', async (req, res) => {
  const { userId, restaurantId, items, totalPrice } = req.body;

  try {
    const order = new Order({
      userId,
      restaurantId,
      items,
      totalPrice
    });
    await order.save();
    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    res.status(400).json({ error: 'Order creation failed' });
  }
});

// Update Order Status
router.put('/update/:id', async (req, res) => {
  const { status } = req.body;
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.status(200).json({ message: 'Order status updated', order });
  } catch (error) {
    res.status(400).json({ error: 'Failed to update order status' });
  }
});

module.exports = router;
