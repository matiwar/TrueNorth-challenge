"use strict";

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Timezone {
  constructor(name, datetime) {
    const date = _moment.default.parseZone(datetime);

    this.name = name;
    this.date = (0, _moment.default)(date).format("MM/DD/YYYY");
    this.time = (0, _moment.default)(date).format("h:mmA");
  }

}

module.exports = Timezone;