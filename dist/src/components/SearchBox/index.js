"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Autocomplete = _interopRequireDefault(require("@material-ui/lab/Autocomplete"));

var _actions = require("../../redux/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Component = () => {
  const dispatch = (0, _reactRedux.useDispatch)();
  const timezones = (0, _reactRedux.useSelector)(state => state.timezones);
  const selectedTimezones = (0, _reactRedux.useSelector)(state => state.selectedTimezones);
  const [value, setValue] = (0, _react.useState)(null);
  const [inputValue, setInputValue] = (0, _react.useState)("");

  const handleChange = timezone => {
    dispatch((0, _actions.addTimezone)(timezone));
    setValue(null);
    setInputValue("");
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, timezones && timezones.length > 0 && /*#__PURE__*/_react.default.createElement("form", {
    autoComplete: "off",
    className: "searchbox"
  }, /*#__PURE__*/_react.default.createElement(_Autocomplete.default, {
    id: "search-timezone",
    value: value,
    inputValue: inputValue,
    onInputChange: (event, newInputValue) => {
      setInputValue(newInputValue);
    },
    onChange: (event, newValue) => {
      handleChange(newValue);
    },
    options: timezones,
    filterOptions: (options, state) => {
      return options.filter(option => {
        return !selectedTimezones.find(timezone => timezone.name === option);
      });
    },
    fullWidth: true,
    autoHighlight: true,
    renderInput: params => /*#__PURE__*/_react.default.createElement(_TextField.default, _extends({}, params, {
      label: "Timezone",
      margin: "normal",
      variant: "outlined",
      InputProps: { ...params.InputProps,
        type: 'search'
      }
    }))
  })), !timezones || timezones.length === 0 && /*#__PURE__*/_react.default.createElement("h2", null, "Error getting timezones"));
};

var _default = Component;
exports.default = _default;