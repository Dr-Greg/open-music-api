require('dotenv').config();
const { ENVIRONMENT } = require('./constants');

const CONFIG = {
  HOST: process.env.HOST || '0.0.0.0',
  PORT: process.env.PORT || '3000',
  ENVIRONMENT: process.env.ENVIRONMENT || ENVIRONMENT.DEV,
  DB_CONNECTION_STRING_TEMPLATE:
    process.env.DB_CONNECTION_STRING_TEMPLATE || 'mongodb://localhost:27017',
};

module.exports = CONFIG;
