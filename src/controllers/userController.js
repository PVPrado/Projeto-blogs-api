const userService = require('../services/userService');

const createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  return res.status(201).json(user);
};

const getAll = async (req, res) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
};

module.exports = {
  createUser,
  getAll,
};