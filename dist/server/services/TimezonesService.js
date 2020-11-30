"use strict";

var _Timezone = _interopRequireDefault(require("../model/Timezone"));

var _logger = _interopRequireDefault(require("../utils/logger"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BASE_API_URL = 'http://worldtimeapi.org/api/timezone';

async function getTimezonesList() {
  const response = await _axios.default.get(BASE_API_URL).catch(err => {
    throw new Error(`Error getting timezones from ${BASE_API_URL} : ${err}`);
  });
  return response.data;
}

async function getTimezones() {
  const response = await _axios.default.get(BASE_API_URL).catch(err => {
    throw new Error(`Error getting timezones from ${BASE_API_URL} : ${err}`);
  });
  const timezonesList = response.data;
  const requests = timezonesList.map(timezone => _axios.default.get(`${BASE_API_URL}/${timezone}`).then(response => response.data).catch(err => {
    _logger.default.error(`Failed getting timezone ${timezone} : ${err}`);

    return null;
  }));
  const timezones = await Promise.all(requests);
  return timezones.filter(timezone => timezone).map(timezone => new _Timezone.default(timezone.timezone, timezone.datetime));
}

async function getTimezone(timezone) {
  const response = await _axios.default.get(`${BASE_API_URL}/${timezone}`).catch(err => {
    throw new Error(`Error getting timezone from ${timezone} : ${err}`);
  });
  return new _Timezone.default(response.data.timezone, response.data.datetime);
}

module.exports = {
  getTimezonesList,
  getTimezones,
  getTimezone
};