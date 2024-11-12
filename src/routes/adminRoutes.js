// routes/adminRoutes.js
const express = require('express');
const authorize = require('../middleware/authorize');
const router = express.Router();

// Example Admin Dashboard Route
router.get('/dashboard', authorize('admin'), (req, res) => {
  res.status(200).json({ message: 'Welcome to the admin dashboard!' });
});

module.exports = router;
