const Restaurant = require('../models/Restaurant');

// Add a new restaurant
exports.addRestaurant = async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.status(201).json({ message: 'Restaurant added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error in adding restaurant' });
  }
};

// Get list of all restaurants
exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Error in fetching restaurants' });
  }
};
