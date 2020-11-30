import express from 'express';
import logger from '../utils/logger';

const api = express();

api.use('/timezones', require('./TimezonesRoutes'));

api.use((err, req, res, next) => {
  logger.error(err);

  res.status(err.status || 500).json({
    message: err.message,
  });
});


module.exports = api;
