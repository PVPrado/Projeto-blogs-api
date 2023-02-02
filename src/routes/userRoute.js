const express = require('express');
const userController = require('../controllers/userController');

const routers = express.Router();

routers.post('/user', userController.createUser);

module.exports = routers;