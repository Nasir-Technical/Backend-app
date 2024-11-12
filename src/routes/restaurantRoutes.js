const express = require('express');
const router = express.Router();
const { addRestaurant, getRestaurants } = require('../controllers/restaurantController');

router.post('/add', addRestaurant);
router.get('/list', getRestaurants);

module.exports = router;
