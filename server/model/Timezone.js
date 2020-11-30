import moment from 'moment';

class Timezone {
  constructor(name, datetime) {
    const date = moment.parseZone(datetime);

    this.name = name;
    this.date = moment(date).format("MM/DD/YYYY");
    this.time = moment(date).format("h:mmA");
  }
}
  
module.exports = Timezone;