require('dotenv').config();

const express      = require('express');
const helmet       = require('helmet');
const cors         = require('cors');
const rateLimit    = require('express-rate-limit');
const path         = require('path');

const connectDB    = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// ─── Route imports ─────────────────────────────────────────
const authRoutes     = require('./routes/authRoutes');
const companyRoutes  = require('./routes/companyRoutes');
const servicesRoutes = require('./routes/servicesRoutes');
const fundsRoutes    = require('./routes/fundsRoutes');
const contactRoutes  = require('./routes/contactRoutes');

const app = express();


// 🔥 IMPORTANT: Lazy DB connect (Vercel fix)
let isConnected = false;

const initDB = async () => {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
      console.log("✅ DB Connected");
    } catch (err) {
      console.error("❌ DB Error:", err.message);
    }
  }
};


// ─── Security middleware ───────────────────────────────────
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
}));

const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:4200',
  /\.vercel\.app$/,
].filter(Boolean);

app.use(cors({
  origin: (origin, cb) => {
    if (!origin) return cb(null, true);
    const allowed = allowedOrigins.some(o =>
      o instanceof RegExp ? o.test(origin) : o === origin
    );
    cb(null, allowed ? origin : false);
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));


// ─── Rate limiting ─────────────────────────────────────────
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
});

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
});

app.use(globalLimiter);


// ─── Body parsers ─────────────────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));


// ─── Static uploads ───────────────────────────────────────
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// 🔥 Health check (DB init here)
app.get('/api/health', async (req, res) => {
  await initDB();

  res.status(200).json({
    success: true,
    message: 'Backend Running 🚀',
  });
});


// 🔥 API routes (DB init before every request)
app.use('/api/auth',     authLimiter, async (req, res, next) => { await initDB(); next(); }, authRoutes);
app.use('/api/company',  async (req, res, next) => { await initDB(); next(); }, companyRoutes);
app.use('/api/services', async (req, res, next) => { await initDB(); next(); }, servicesRoutes);
app.use('/api/funds',    async (req, res, next) => { await initDB(); next(); }, fundsRoutes);
app.use('/api/contact',  contactLimiter, async (req, res, next) => { await initDB(); next(); }, contactRoutes);


// ─── 404 handler ──────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`,
  });
});


// ─── Error handler ────────────────────────────────────────
app.use(errorHandler);


// ❗ Vercel के लिए जरूरी
module.exports = app;