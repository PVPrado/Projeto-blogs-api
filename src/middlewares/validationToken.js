const { authenticateToken } = require('../utils/JWT');

const validationToken = async (req, res, next) => {
  const token = req.headers.authorization;
  const user = await authenticateToken(token);

  if (!user) {
    const error = new Error('Token not found');
    error.status = 401;
    throw error;
  }
  next();
};

module.exports = validationToken;