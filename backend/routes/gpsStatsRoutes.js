const express = require('express');
const { body } = require('express-validator');

const gpsStatsCtrl = require('../controllers/gpsStatsController');
const { protect } = require('../middleware/auth');

const router = express.Router();

const statsRules = [
  body('vehiclesOnline').optional().isInt({ min: 0 }).withMessage('vehiclesOnline must be 0 or greater').toInt(),
  body('tripsTracked').optional().isInt({ min: 0 }).withMessage('tripsTracked must be 0 or greater').toInt(),
  body('smartAlerts').optional().isInt({ min: 0 }).withMessage('smartAlerts must be 0 or greater').toInt(),
  body('citiesCovered').optional().isInt({ min: 0 }).withMessage('citiesCovered must be 0 or greater').toInt(),
];

router.get('/', gpsStatsCtrl.getGpsStats);
router.put('/', protect, statsRules, gpsStatsCtrl.updateGpsStats);

module.exports = router;
