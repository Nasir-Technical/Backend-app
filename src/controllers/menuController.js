const Menu = require('../models/Menu');

// Add menu to a restaurant
exports.addMenu = async (req, res) => {
  try {
    const { restaurantId, items } = req.body;
    const menu = new Menu({ restaurant: restaurantId, items });
    await menu.save();
    res.status(201).json({ message: 'Menu added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error in adding menu' });
  }
};

// Get menu of a specific restaurant
exports.getMenu = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const menu = await Menu.findOne({ restaurant: restaurantId }).populate('restaurant');
    if (!menu) {
      return res.status(404).json({ message: 'Menu not found for this restaurant' });
    }
    res.json(menu);
  } catch (error) {
    res.status(500).json({ error: 'Error in fetching menu' });
  }
};
