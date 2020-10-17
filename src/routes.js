const express = require('express');
const routes = express.Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const ServiceController = require('./controller/ServiceController');
const BackgroundController = require('./controller/BackgroundController');

routes.get('/services', ServiceController.index);
routes.get('/service/:id', ServiceController.show);
routes.post('/service', multer(multerConfig).single('image'), ServiceController.create);
routes.put('/service/:id', ServiceController.update);
routes.delete('/service/:id', ServiceController.delete);

routes.get('/backgrounds', BackgroundController.index);
routes.get('/background/:key', BackgroundController.show);
routes.post('/background', multer(multerConfig).single('image'), BackgroundController.create);
routes.put('/background/:id', BackgroundController.update);
routes.delete('/background/:id', BackgroundController.delete);


module.exports = routes;