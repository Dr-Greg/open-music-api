const joi = require('@hapi/joi');
const { ENVIRONMENT } = require('./constants');

module.exports.configSchema = joi.object({
  HOST: joi
    .string()
    .ip({ version: ['ipv4'] })
    .required(),
  PORT: joi
    .number()
    .min(0)
    .integer()
    .required(),
  DB_CONNECTION_STRING_TEMPLATE: joi.string().required(),
  ENVIRONMENT: joi
    .string()
    .valid(...Object.values(ENVIRONMENT))
    .required(),
});
