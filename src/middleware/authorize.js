// middleware/authorize.js
module.exports = (requiredRole) => {
    return (req, res, next) => {
      if (req.user && req.user.role === requiredRole) {
        next();
      } else {
        return res.status(403).json({ error: 'Access denied. You do not have permission.' });
      }
    };
  };
  