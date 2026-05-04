const { validationResult } = require('express-validator');
const Company = require('../models/Company');

// ─── GET /api/company ────────────────────────────────────────────────────────
// Returns the single company document — Angular reads this on load
exports.getCompany = async (req, res, next) => {
  try {
    const company = await Company.findOne().select('-__v').lean();
    if (!company) {
      return res.status(404).json({
        success: false,
        message: 'Company details not found. Seed the database first.',
      });
    }
    res.status(200).json({ success: true, data: company });
  } catch (err) {
    next(err);
  }
};

// ─── POST /api/company ───────────────────────────────────────────────────────
exports.createCompany = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ success: false, errors: errors.array() });
    }

    const existing = await Company.findOne();
    if (existing) {
      return res.status(409).json({
        success: false,
        message: 'Company already exists. Use PUT /api/company/:id to update.',
      });
    }

    const data = { ...req.body };
    if (req.file) data.logo = `/uploads/${req.file.filename}`;

    const company = await Company.create(data);
    res.status(201).json({ success: true, data: company });
  } catch (err) {
    next(err);
  }
};

// ─── PUT /api/company/:id ────────────────────────────────────────────────────
exports.updateCompany = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ success: false, errors: errors.array() });
    }

    const data = { ...req.body };
    if (req.file) data.logo = `/uploads/${req.file.filename}`;

    const company = await Company.findByIdAndUpdate(req.params.id, data, {
      new: true,
      runValidators: true,
    }).select('-__v');

    if (!company) {
      return res.status(404).json({ success: false, message: 'Company not found.' });
    }
    res.status(200).json({ success: true, data: company });
  } catch (err) {
    next(err);
  }
};
