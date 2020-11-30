"use strict";

var _express = _interopRequireDefault(require("express"));

var _logger = _interopRequireDefault(require("../utils/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = (0, _express.default)();
api.use('/timezones', require('./TimezonesRoutes'));
api.use((err, req, res, next) => {
  _logger.default.error(err);

  res.status(err.status || 500).json({
    message: err.message
  });
});
module.exports = api;