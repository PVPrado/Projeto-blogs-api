const userService = require('../services/userService');

const createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  return res.status(201).json(user);
};

module.exports = {
  createUser,
};