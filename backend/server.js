require('dotenv').config();

const express = require('express');
const http = require('http');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const path = require('path');
const { Server } = require('socket.io');

const authRoutes = require('./routes/authRoutes');
const companyRoutes = require('./routes/companyRoutes');
const servicesRoutes = require('./routes/servicesRoutes');
const fundsRoutes = require('./routes/fundsRoutes');
const contactRoutes = require('./routes/contactRoutes');
const gpsStatsRoutes = require('./routes/gpsStatsRoutes');
const gpsStatsCtrl = require('./controllers/gpsStatsController');
const GpsStats = require('./models/GpsStats');

const app = express();
const httpServer = http.createServer(app);
let io = null;
let liveStatsInterval = null;

app.set('trust proxy', true);

let isConnected = false;

const buildGpsLiveStats = async () => {
  const stats = await GpsStats.findOne().lean();

  return {
    vehiclesOnline: stats?.vehiclesOnline ?? 0,
    tripsTracked: stats?.tripsTracked ?? 0,
    smartAlerts: stats?.smartAlerts ?? 0,
    citiesCovered: stats?.citiesCovered ?? 0,
    updatedAt: stats?.updatedAt ?? new Date().toISOString(),
  };
};

const startSocketServer = () => {
  if (io) return io;

  io = new Server(httpServer, {
    cors: {
      origin: true,
      credentials: true,
    },
  });

  gpsStatsCtrl.setGpsStatsEmitter((payload) => {
    io.emit('gps:live-stats', payload);
  });

  io.on('connection', async (socket) => {
    const payload = await buildGpsLiveStats();
    socket.emit('gps:live-stats', payload);
  });

  if (!liveStatsInterval) {
    liveStatsInterval = setInterval(async () => {
      const payload = await buildGpsLiveStats();
      io.emit('gps:live-stats', payload);
    }, 10000);
  }

  return io;
};

const connectDB = async () => {
  if (isConnected) return;

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI missing');
  }

  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
  console.log('MongoDB Connected');
};

app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
}));

app.use(cors({
  origin: true,
  credentials: true,
}));

const getClientIp = (req) =>
  req.ip ||
  req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
  req.headers['x-real-ip'] ||
  req.socket?.remoteAddress ||
  'unknown';

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  keyGenerator: getClientIp,
  handler: (req, res) => {
    res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again later.',
    });
  },
  skipFailedRequests: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/api/health', async (req, res) => {
  try {
    await connectDB();
    res.json({
      success: true,
      message: 'Backend running',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'NVIQ backend is running. Use /api/health or /api/...',
  });
});

const withDB = async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

app.use('/api/auth', withDB, authRoutes);
app.use('/api/company', withDB, companyRoutes);
app.use('/api/services', withDB, servicesRoutes);
app.use('/api/funds', withDB, fundsRoutes);
app.use('/api/contact', withDB, contactRoutes);
app.use('/api/live-stats/gps', withDB, gpsStatsRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  startSocketServer();
  httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
