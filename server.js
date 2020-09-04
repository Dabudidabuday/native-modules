'use strict';

require('dotenv').config();

const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const router = express.Router();

const headers = require('./config/headers.js');
const controllers = require('./src/controller/index.js');

app.use(express.static(path.join(__dirname, '')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(controllers(router));
app.use(headers);

app.set('view engine', 'html');

app.listen(port, () => {
    console.log('we are on ' + port);
});
