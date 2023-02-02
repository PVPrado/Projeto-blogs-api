const userService = require('../services/userService');

const createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  return res.status(201).json(user);
};

const getAll = async (req, res) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getById(id);

  if (user.message) {
    return res.status(404).json({ message: user.message });
  }
  return res.status(200).json(user);
};

module.exports = {
  createUser,
  getAll,
  getById,
};