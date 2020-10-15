const express = require('express');
const routes = express.Router();

const ServiceController = require('./controller/ServiceController');

routes.get('/', ServiceController.index);

module.exports = routes;