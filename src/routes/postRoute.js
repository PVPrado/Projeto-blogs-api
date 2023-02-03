const express = require('express');
const postController = require('../controllers/postController');
const validationToken = require('../middlewares/validationToken');

const routers = express.Router();

routers.get('/post', validationToken, postController.getAll);

module.exports = routers;