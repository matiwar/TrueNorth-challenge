import Timezone from '../model/Timezone';
import logger from '../utils/logger';
import axios from 'axios';

const BASE_API_URL= 'http://worldtimeapi.org/api/timezone';

async function getTimezonesList() {
  const response = await axios.get(BASE_API_URL)
    .catch(err => {
      throw new Error(`Error getting timezones from ${BASE_API_URL} : ${err}`)
    });

  return response.data;
}

async function getTimezones() {
  const response = await axios.get(BASE_API_URL)
    .catch(err => {
      throw new Error(`Error getting timezones from ${BASE_API_URL} : ${err}`)
    });

  const timezonesList = response.data;

  const requests = timezonesList.map(timezone => 
    axios.get(`${BASE_API_URL}/${timezone}`)
      .then(response => response.data)
      .catch(err => {
        logger.error(`Failed getting timezone ${timezone} : ${err}`);
        return null;
      })
  );

  const timezones = await Promise.all(requests);

  return timezones
    .filter(timezone => timezone)
    .map(timezone => new Timezone(timezone.timezone, timezone.datetime));
}

async function getTimezone(timezone) {
  const response = await axios.get(`${BASE_API_URL}/${timezone}`)
    .catch(err => {
      throw new Error(`Error getting timezone from ${timezone} : ${err}`)
    });
  
  return new Timezone(response.data.timezone, response.data.datetime)
}

module.exports = { getTimezonesList, getTimezones, getTimezone };
