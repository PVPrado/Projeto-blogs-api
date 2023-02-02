const express = require('express');
const userController = require('../controllers/userController');
const validationToken = require('../middlewares/validationToken');

const routers = express.Router();

routers.post('/user', userController.createUser);
routers.get('/user', validationToken, userController.getAll);
routers.get('/user/:id', validationToken, userController.getById);

module.exports = routers;