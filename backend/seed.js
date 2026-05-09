/**
 * seed.js — Pre-populate NVIQ Bharat DB with real company + sample funds
 * Run: node seed.js
 * Wipe + reseed: node seed.js --fresh
 */
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');

const Admin   = require('./models/Admin');
const Company = require('./models/Company');
const Fund    = require('./models/Fund');
const Service = require('./models/Service');

// ─── Seed Data ────────────────────────────────────────────────────────────────

const adminData = {
  name:     'NVIQ Admin',
  email:    'admin@nviqbharat.com',
  password: 'Admin@1234',
  role:     'superadmin',
};

const companyData = {
  companyName:  'NVIQ Bharat Technology Private Limited',
  CIN:          'U62099RJ2026PTC113523',
  PAN:          'AALCN5488M',
  address:      'Vill. Jamalpur, Teh. Malakhera, Alwar, Rajasthan',
  phone:        '9694551326',
  email:        'nviqbharat@gmail.com',
  website:      'https://nviqbharat.com',
  tagline:      'Innovating Fleet & Finance Solutions',
  foundedYear:  2026,
  socialLinks: {
    linkedin:  '',
    twitter:   '',
    facebook:  '',
    instagram: '',
  },
};

const fundsData = [
  {
    fundName:    'SBI Bluechip Fund',
    category:    'Equity',
    risk:        'Moderate',
    returns:     '12%',
    description: 'Stable large-cap fund focused on blue-chip companies for consistent long-term growth.',
    minSIP:      500,
    isFeatured:  true,
    order:       1,
  },
  {
    fundName:    'Axis Long Term Equity Fund (ELSS)',
    category:    'ELSS',
    risk:        'High',
    returns:     '18%',
    description: 'Tax-saving ELSS fund with a 3-year lock-in. Ideal for wealth creation + tax benefits.',
    minSIP:      500,
    isFeatured:  true,
    order:       2,
  },
  {
    fundName:    'HDFC Balanced Advantage Fund',
    category:    'Hybrid',
    risk:        'Moderate',
    returns:     '14%',
    description: 'Dynamic asset allocation between equity & debt for balanced risk and reward.',
    minSIP:      1000,
    isFeatured:  false,
    order:       3,
  },
  {
    fundName:    'Mirae Asset Large Cap Fund',
    category:    'Equity',
    risk:        'Moderate',
    returns:     '16%',
    description: 'Top-performing large-cap fund with consistent above-category returns.',
    minSIP:      1000,
    isFeatured:  true,
    order:       4,
  },
  {
    fundName:    'ICICI Prudential Liquid Fund',
    category:    'Liquid',
    risk:        'Low',
    returns:     '7%',
    description: 'Park surplus funds safely. High liquidity with better returns than savings accounts.',
    minSIP:      500,
    isFeatured:  false,
    order:       5,
  },
  {
    fundName:    'Nippon India Small Cap Fund',
    category:    'Equity',
    risk:        'Very High',
    returns:     '24%',
    description: 'High-growth small-cap fund for aggressive investors with a 5+ year horizon.',
    minSIP:      500,
    isFeatured:  false,
    order:       6,
  },
  {
    fundName:    'Kotak Bond Fund',
    category:    'Debt',
    risk:        'Low',
    returns:     '8.5%',
    description: 'Safe debt fund investing in government bonds and AAA-rated instruments.',
    minSIP:      1000,
    isFeatured:  false,
    order:       7,
  },
];

const servicesData = [
  {
    title:       'GPS Fleet Tracking',
    description: 'Real-time GPS tracking for your entire fleet. Live maps, geo-fencing, route analytics, and instant alerts to keep your vehicles safe and efficient.',
    icon:        '🗺️',
    isActive:    true,
    order:       1,
  },
  {
    title:       'Mutual Fund Platform',
    description: 'Goal-based SIP investing powered by AI recommendations. Track NAV, manage portfolios, and grow wealth with Free Consultation • AMFI Registered support. ARN No: 359231.',
    icon:        '📈',
    isActive:    true,
    order:       2,
  },
  {
    title:       'FASTag Management',
    description: 'Seamless toll payments for your fleet. Auto-recharge, low-balance alerts, and nationwide NHAI coverage for hassle-free highway travel.',
    icon:        '💳',
    isActive:    true,
    order:       3,
  },
  {
    title:       'Agriculture Drone Services',
    description: 'Smart farming with AI-powered drones. Automated spraying, live crop health monitoring, and precision agriculture to maximize yield.',
    icon:        '🚁',
    isActive:    true,
    order:       4,
  },
];

// ─── Seed function ────────────────────────────────────────────────────────────
const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');

    const fresh = process.argv.includes('--fresh');

    if (fresh) {
      await Promise.all([
        Admin.deleteMany({}),
        Company.deleteMany({}),
        Fund.deleteMany({}),
        Service.deleteMany({}),
      ]);
      console.log('🗑️  Cleared existing data');
    }

    // ── Admin ──
    const existingAdmin = await Admin.findOne({ email: adminData.email });
    if (!existingAdmin) {
      await Admin.create(adminData);
      console.log(`👤 Admin created: ${adminData.email} / ${adminData.password}`);
    } else {
      console.log('👤 Admin already exists — skipped');
    }

    // ── Company ──
    const existingCompany = await Company.findOne();
    if (!existingCompany) {
      await Company.create(companyData);
      console.log('🏢 Company data seeded');
    } else {
      console.log('🏢 Company already exists — skipped');
    }

    // ── Funds ──
    const fundCount = await Fund.countDocuments();
    if (fundCount === 0 || fresh) {
      if (fresh) await Fund.deleteMany({});
      await Fund.insertMany(fundsData);
      console.log(`📊 ${fundsData.length} funds seeded`);
    } else {
      console.log('📊 Funds already exist — skipped');
    }

    // ── Services ──
    const serviceCount = await Service.countDocuments();
    if (serviceCount === 0 || fresh) {
      if (fresh) await Service.deleteMany({});
      await Service.insertMany(servicesData);
      console.log(`💼 ${servicesData.length} services seeded`);
    } else {
      console.log('💼 Services already exist — skipped');
    }

    console.log('\n🎉 Database seeding complete!');
    console.log('─────────────────────────────────');
    console.log('Admin Login:');
    console.log(`  Email:    ${adminData.email}`);
    console.log(`  Password: ${adminData.password}`);
    console.log('─────────────────────────────────');
  } catch (err) {
    console.error('❌ Seed error:', err.message);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 MongoDB disconnected');
    process.exit(0);
  }
};

seed();
