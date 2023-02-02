const { Category } = require('../models');

const createCategory = async (body) => {
  const { name } = body;

  if (!name) {
    const error = new Error('"name" is required');
    error.status = 400;
    throw error;
  }

  await Category.create({ name });
  const category = await Category.findOne({ attributes: ['id', 'name'], where: { name } });
  return category;
};

module.exports = {
  createCategory,
};