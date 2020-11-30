"use strict";

var _lights = _interopRequireDefault(require("./lights"));

var _assistant = _interopRequireDefault(require("./assistant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  LightsService: _lights.default,
  AssistantService: _assistant.default
};