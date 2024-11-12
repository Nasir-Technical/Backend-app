const express = require('express');
const router = express.Router();
const { addMenu, getMenu } = require('../controllers/menuController');

// Route to add menu to a restaurant
router.post('/add', addMenu);

// Route to get menu of a specific restaurant
router.get('/:restaurantId', getMenu);

module.exports = router;
