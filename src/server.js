const express = require('express');
const routes = require('./routes');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '.', 'uploads')));

app.listen(3333);