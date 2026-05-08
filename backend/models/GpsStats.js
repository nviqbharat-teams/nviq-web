const mongoose = require('mongoose');

const gpsStatsSchema = new mongoose.Schema(
  {
    vehiclesOnline: {
      type: Number,
      default: 0,
      min: 0,
    },
    tripsTracked: {
      type: Number,
      default: 0,
      min: 0,
    },
    smartAlerts: {
      type: Number,
      default: 0,
      min: 0,
    },
    citiesCovered: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('GpsStats', gpsStatsSchema);
