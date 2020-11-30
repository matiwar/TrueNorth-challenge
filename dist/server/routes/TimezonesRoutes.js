"use strict";

var _coRouter = _interopRequireDefault(require("co-router"));

var _TimezonesService = _interopRequireDefault(require("../services/TimezonesService"));

var _logger = _interopRequireDefault(require("../utils/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _coRouter.default)();
router.get('/', async (req, res) => {
  const response = await _TimezonesService.default.getTimezones();
  res.status(200).json(response);
});
router.get('/list', async (req, res) => {
  const response = await _TimezonesService.default.getTimezonesList();
  res.status(200).json(response);
});
router.get('/:timezone(*)', async (req, res) => {
  const response = await _TimezonesService.default.getTimezone(req.params.timezone);
  res.status(200).json(response);
});
router.put('/:timezone(*)', async (req, res) => {
  _logger.default.info(`Save timezone ${req.params.timezone}`);

  res.sendStatus(200);
});
router.delete('/:timezone(*)', async (req, res) => {
  _logger.default.info(`Delete timezone ${req.params.timezone}`);

  res.sendStatus(200);
});
module.exports = router;