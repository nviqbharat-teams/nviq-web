const { validationResult } = require('express-validator');
const GpsStats = require('../models/GpsStats');

const DEFAULT_STATS = {
  vehiclesOnline: 0,
  tripsTracked: 0,
  smartAlerts: 0,
  citiesCovered: 0,
};

let emitGpsStatsUpdate = () => {};

const ensureStatsDocument = async () => {
  let stats = await GpsStats.findOne();
  if (!stats) {
    stats = await GpsStats.create(DEFAULT_STATS);
  }
  return stats;
};

exports.setGpsStatsEmitter = (emitter) => {
  emitGpsStatsUpdate = emitter;
};

exports.getGpsStats = async (req, res, next) => {
  try {
    const stats = await ensureStatsDocument();
    res.status(200).json({
      success: true,
      data: {
        vehiclesOnline: stats.vehiclesOnline,
        tripsTracked: stats.tripsTracked,
        smartAlerts: stats.smartAlerts,
        citiesCovered: stats.citiesCovered,
        updatedAt: stats.updatedAt,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.updateGpsStats = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ success: false, errors: errors.array() });
    }

    const stats = await ensureStatsDocument();
    const fields = ['vehiclesOnline', 'tripsTracked', 'smartAlerts', 'citiesCovered'];

    fields.forEach((field) => {
      if (req.body[field] !== undefined) {
        stats[field] = req.body[field];
      }
    });

    await stats.save();

    const payload = {
      vehiclesOnline: stats.vehiclesOnline,
      tripsTracked: stats.tripsTracked,
      smartAlerts: stats.smartAlerts,
      citiesCovered: stats.citiesCovered,
      updatedAt: stats.updatedAt,
    };

    emitGpsStatsUpdate(payload);

    res.status(200).json({
      success: true,
      message: 'GPS live stats updated successfully.',
      data: payload,
    });
  } catch (err) {
    next(err);
  }
};
