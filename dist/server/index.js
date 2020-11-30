"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _view = _interopRequireDefault(require("../src/view"));

var _config = _interopRequireDefault(require("./config"));

var _logger = _interopRequireDefault(require("./utils/logger"));

var _TimezonesService = _interopRequireDefault(require("./services/TimezonesService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

const router = _express.default.Router();

const serverRenderer = async (req, res, next) => {
  let timezones = [];

  try {
    timezones = await _TimezonesService.default.getTimezonesList();
  } catch (err) {
    _logger.default.error(err);
  }

  const initialState = {
    timezones,
    selectedTimezones: []
  };
  const {
    preloadedState,
    content
  } = (0, _view.default)(initialState);

  _fs.default.readFile(_path.default.resolve('./src/public/index.html'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('An error occurred');
    }

    return res.send(data.replace('<div id="root"></div>', `<div id="root">${content}</div>`).replace('<script></script>', `<script>window.__STATE__ = ${JSON.stringify(preloadedState)}</script>`));
  });
};

app.use('/assets', _express.default.static(_path.default.resolve(__dirname, '../assets')));
router.use('^/$', serverRenderer);
router.use('/api', require('./routes'));
router.use('/ping', require('express-healthcheck')());
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use(router);
app.listen(_config.default.port, () => {
  console.log(`Server running on port ${_config.default.port}`);
});