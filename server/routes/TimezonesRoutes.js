import Router from 'co-router';
import TimezonesService from '../services/TimezonesService';
import logger from '../utils/logger';

const router = Router();

router.get('/', async (req, res) => {
  const response = await TimezonesService.getTimezones();
  res.status(200).json(response);
});

router.get('/list', async (req, res) => {
  const response = await TimezonesService.getTimezonesList();
  res.status(200).json(response);
});

router.get('/:timezone(*)', async (req, res) => {
  const response = await TimezonesService.getTimezone(req.params.timezone);
  res.status(200).json(response);
});

router.put('/:timezone(*)', async (req, res) => {
  logger.info(`Save timezone ${req.params.timezone}`)
  res.sendStatus(200);
});

router.delete('/:timezone(*)', async (req, res) => {
  logger.info(`Delete timezone ${req.params.timezone}`)
  res.sendStatus(200);
});

module.exports = router;
