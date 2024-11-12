const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Authentication routes import
// const userRoutes = require('./routes/userRoutes'); // User-related routes import
const orderRoutes = require('./routes/orderRoutes');
const deliveryAgentRoutes = require('./routes/deliveryAgentRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();

// Middleware setup
app.use(cors()); // Enables CORS for all origins, modify as needed for security
app.use(express.json()); // Parses JSON requests

// Routes setup
app.use('/api/auth', authRoutes); // Auth routes for signup/login
// app.use('/api/user', userRoutes); // User routes (example for user profile, etc.)
app.use('/api/orders', orderRoutes);
app.use('/api/delivery', deliveryAgentRoutes);
// Admin Routes
app.use('/api/admin', adminRoutes);

// MongoDB connection setup
const connectDB = async () => {
  try {
    // Check if MONGODB_URI exists in .env
    if (!process.env.MONGODB_URI) {
      console.log('Error: MONGODB_URI is not defined in .env');
      process.exit(1); // Stop the server if MongoDB URI is missing
    }

    // Connect to MongoDB using the connection string from .env file
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,  // Mongoose option to avoid deprecation warning
      useUnifiedTopology: true, // Mongoose option to avoid deprecation warning
      useFindAndModify: false, // Fix for deprecated useFindAndModify option
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure if DB connection fails
  }
};

// Connect to the database
connectDB();

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
