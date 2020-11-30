"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _actions = require("../../redux/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Component = () => {
  const dispatch = (0, _reactRedux.useDispatch)();
  const selectedTimezones = (0, _reactRedux.useSelector)(state => state.selectedTimezones);

  const handleRemove = timezone => {
    dispatch((0, _actions.removeTimezone)(timezone));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "selected-timezones"
  }, selectedTimezones.map(timezone => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "timezone",
      key: timezone.name
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "timezone__name"
    }, timezone.name), /*#__PURE__*/_react.default.createElement("span", {
      className: "timezone__date"
    }, timezone.date), /*#__PURE__*/_react.default.createElement("span", {
      className: "timezone__time"
    }, timezone.time), /*#__PURE__*/_react.default.createElement("span", {
      className: "timezone__remove",
      onClick: () => handleRemove(timezone.name)
    }, "x"));
  }));
};

var _default = Component;
exports.default = _default;