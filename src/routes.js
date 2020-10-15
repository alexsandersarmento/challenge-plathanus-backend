const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const ServiceController = require('./controller/ServiceController');

routes.get('/', ServiceController.index);
routes.get('/:id', ServiceController.show);
routes.post('/', multer(multerConfig).single('image'), ServiceController.create);
routes.put('/:id', ServiceController.update);
routes.delete('/:id', ServiceController.delete);

module.exports = routes;