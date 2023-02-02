const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET || 'secretseteJWT';

const generateToken = (payload) => jwt.sign(payload, TOKEN_SECRET, {
  algorithm: 'HS256',
  expiresIn: '15m',
});

const authenticateToken = async (token) => {
  if (!token) {
    const error = new Error('Token not found');
    error.status = 401;
    throw error;
  }

  try {
    const verification = await jwt.verify(token, TOKEN_SECRET);
    return verification;
  } catch (err) {
    const error = new Error('Expired or invalid token');
    error.status = 401;
    throw error;
  }
};

module.exports = {
  generateToken,
  authenticateToken,
};