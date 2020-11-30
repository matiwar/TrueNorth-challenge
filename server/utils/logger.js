import { createLogger, format, transports } from 'winston';
import moment from 'moment';

const timestamp = () => moment().format('YYYY/MM/DD HH:mm:ss');

const { combine, printf } = format;

const myFormat = printf(info => `${timestamp()} [${info.level.toUpperCase()}]: ${info.message}`);
const customFormat = combine(
  myFormat,
);

const logger = createLogger({
  level: 'info',
  format: customFormat,
  transports: [
    new transports.Console(),
  ],
});

module.exports = logger;
