const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection setup
const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.log('Error: MONGODB_URI is not defined in .env');
      process.exit(1); // Stop the server if MongoDB URI is missing
    }
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // updated options, removing useFindAndModify
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};


module.exports = connectDB;
