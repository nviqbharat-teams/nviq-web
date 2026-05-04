const { validationResult } = require('express-validator');
const Fund = require('../models/Fund');

// ─── Helpers ─────────────────────────────────────────────────────────────────
const paginate = (query) => {
  const page  = Math.max(1, parseInt(query.page)  || 1);
  const limit = Math.min(50, Math.max(1, parseInt(query.limit) || 20));
  return { page, limit, skip: (page - 1) * limit };
};

// ─── GET /api/funds ──────────────────────────────────────────────────────────
// Response matches Angular slider: [{ fundName, returns, risk, description, ... }]
exports.getFunds = async (req, res, next) => {
  try {
    const { page, limit, skip } = paginate(req.query);

    const filter = { isActive: true };
    if (req.query.category) filter.category = req.query.category;
    if (req.query.risk)     filter.risk      = req.query.risk;
    if (req.query.featured === 'true') filter.isFeatured = true;

    const [funds, total] = await Promise.all([
      Fund.find(filter)
        .select('-__v')
        .sort({ isFeatured: -1, order: 1, createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Fund.countDocuments(filter),
    ]);

    res.status(200).json({
      success: true,
      data: funds,
      pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
    });
  } catch (err) {
    next(err);
  }
};

// ─── GET /api/funds/:id ──────────────────────────────────────────────────────
exports.getFund = async (req, res, next) => {
  try {
    const fund = await Fund.findById(req.params.id).select('-__v');
    if (!fund) {
      return res.status(404).json({ success: false, message: 'Fund not found.' });
    }
    res.status(200).json({ success: true, data: fund });
  } catch (err) {
    next(err);
  }
};

// ─── POST /api/funds ─────────────────────────────────────────────────────────
exports.createFund = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ success: false, errors: errors.array() });
    }
    const fund = await Fund.create(req.body);
    res.status(201).json({ success: true, data: fund });
  } catch (err) {
    next(err);
  }
};

// ─── PUT /api/funds/:id ──────────────────────────────────────────────────────
exports.updateFund = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ success: false, errors: errors.array() });
    }
    const fund = await Fund.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).select('-__v');

    if (!fund) {
      return res.status(404).json({ success: false, message: 'Fund not found.' });
    }
    res.status(200).json({ success: true, data: fund });
  } catch (err) {
    next(err);
  }
};

// ─── DELETE /api/funds/:id ───────────────────────────────────────────────────
exports.deleteFund = async (req, res, next) => {
  try {
    const fund = await Fund.findByIdAndDelete(req.params.id);
    if (!fund) {
      return res.status(404).json({ success: false, message: 'Fund not found.' });
    }
    res.status(200).json({ success: true, message: 'Fund deleted successfully.' });
  } catch (err) {
    next(err);
  }
};
