const express = require('express');
const HTTP_CODE = require('http-status-codes');
const cors = require('cors');

const routes = require('./routes');
const { API_VERSION } = require('./constants');
const { DB_CONNECTION_STRING_TEMPLATE } = require('./config');
const { getDbConnection } = require('./db');

const app = express();

getDbConnection(DB_CONNECTION_STRING_TEMPLATE);

app.use(cors());
app.use(express.json());

app.get('/status', (req, res) => res.sendStatus(HTTP_CODE.OK));
app.use(`/api/${API_VERSION}`, routes);

module.exports = app;
