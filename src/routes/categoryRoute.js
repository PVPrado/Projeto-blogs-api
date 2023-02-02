const express = require('express');
const categoryController = require('../controllers/categoryController');
const validationToken = require('../middlewares/validationToken');

const routers = express.Router();

routers.post('/categories', validationToken, categoryController.createCategory);

module.exports = routers;