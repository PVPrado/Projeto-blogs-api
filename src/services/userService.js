const schema = require('../middlewares/schema');
const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const login = async (email, password) => {
  if (!email || !password) {
    const error = new Error('Some required fields are missing');
    error.status = 400;
    throw error;
  }

  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email'],
    where: { email, password },
  });

  if (!user) {
    const error = new Error('Invalid fields');
    error.status = 400;
    throw error;
  }

  const token = generateToken(user.dataValues);

  return { token };
};

const createUser = async (user) => {
  const { error } = schema.validate(user);
  if (error) {
    const err = new Error(error.message);
    err.status = 400;
    throw err;
  }
  const { displayName, email, password, image } = user;
  const getUser = await User
    .findOne({ attributes: ['displayName', 'email'], where: { email, password } });
  
  if (getUser) {
    const err = new Error('User already registered');
    err.status = 409;
    throw err;
  }
  await User.create({ displayName, email, password, image });
  const result = await generateToken({ email, password });
  return { token: result };
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

module.exports = {
  login,
  createUser,
  getAll,
};