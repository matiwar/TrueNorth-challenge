"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _Alert = _interopRequireDefault(require("@material-ui/lab/Alert"));

var _SearchBox = _interopRequireDefault(require("../SearchBox"));

var _Timezones = _interopRequireDefault(require("../Timezones"));

var _actions = require("../../redux/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = () => {
  const dispatch = (0, _reactRedux.useDispatch)();
  const loading = (0, _reactRedux.useSelector)(state => state.loading);
  const snackbar = (0, _reactRedux.useSelector)(state => state.snackbar);

  const handleClose = () => {
    dispatch((0, _actions.resetSnackbar)());
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement(_SearchBox.default, null), /*#__PURE__*/_react.default.createElement(_Timezones.default, null), loading && /*#__PURE__*/_react.default.createElement("div", {
    className: "loading"
  }, /*#__PURE__*/_react.default.createElement(_CircularProgress.default, null)), snackbar && /*#__PURE__*/_react.default.createElement(_Snackbar.default, {
    open: true,
    autoHideDuration: 3000,
    onClose: handleClose
  }, /*#__PURE__*/_react.default.createElement(_Alert.default, {
    severity: snackbar.type
  }, snackbar.message)));
};

var _default = App;
exports.default = _default;