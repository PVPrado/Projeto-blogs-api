const userService = require('../services/userService');

const login = async (req, res) => {
  const { email, password } = req.body;

  const auth = await userService.login(email, password);
  res.status(200).send(auth);
};

module.exports = {
  login,
};