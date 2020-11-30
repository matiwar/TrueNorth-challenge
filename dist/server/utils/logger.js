"use strict";

var _winston = require("winston");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const timestamp = () => (0, _moment.default)().format('YYYY/MM/DD HH:mm:ss');

const {
  combine,
  printf
} = _winston.format;
const myFormat = printf(info => `${timestamp()} [${info.level.toUpperCase()}]: ${info.message}`);
const customFormat = combine(myFormat);
const logger = (0, _winston.createLogger)({
  level: 'info',
  format: customFormat,
  transports: [new _winston.transports.Console()]
});
module.exports = logger;