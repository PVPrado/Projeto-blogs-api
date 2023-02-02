const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  const category = await categoryService.createCategory(req.body);
  return res.status(201).json(category);
};

const getAll = async (req, res) => {
  const categories = await categoryService.getAll();
  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAll,
};