require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  dbUri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET_KEY
};
