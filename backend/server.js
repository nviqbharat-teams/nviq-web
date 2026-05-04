require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const path = require('path');
const serverless = require('serverless-http');

// routes
const authRoutes = require('./routes/authRoutes');
const companyRoutes = require('./routes/companyRoutes');
const servicesRoutes = require('./routes/servicesRoutes');
const fundsRoutes = require('./routes/fundsRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();


app.set('trust proxy', true);

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI missing ❌");
    }

    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ DB Error:", err.message);
    throw err; 
  }
};

// 🔐 Security
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
}));

// 🌐 CORS
app.use(cors({
  origin: true,
  credentials: true,
}));

const getClientIp = (req) => {
  return req.ip ||
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    'unknown';
};

// 🚦 Rate limit
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

// 📦 Body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 📁 Static
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 🧪 Health route
app.get('/api/health', async (req, res) => {
  try {
    await connectDB();

    res.json({
      success: true,
      message: "Backend Running 🚀"
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

// 🔥 Middleware to ensure DB connection
const withDB = async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔥 Routes
app.use('/api/auth', withDB, authRoutes);
app.use('/api/company', withDB, companyRoutes);
app.use('/api/services', withDB, servicesRoutes);
app.use('/api/funds', withDB, fundsRoutes);
app.use('/api/contact', withDB, contactRoutes);

// ❌ 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

module.exports = serverless(app);
