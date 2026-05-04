const { validationResult } = require('express-validator');
const Contact = require('../models/Contact');

// ─── POST /api/contact ───────────────────────────────────────────────────────
// Called by Angular contact form — saves to DB, returns success message
exports.submitContact = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ success: false, errors: errors.array() });
    }

    const { name, email, phone, message, source } = req.body;
    const ipAddress =
      req.headers['x-forwarded-for']?.split(',')[0].trim() ||
      req.socket.remoteAddress;

    await Contact.create({ name, email, phone, message, source: source || 'contact-form', ipAddress });

    // Angular reads `message` field to display success toast
    res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! We will get back to you shortly.',
    });
  } catch (err) {
    next(err);
  }
};

// ─── GET /api/contact (Admin only) ──────────────────────────────────────────
exports.getContacts = async (req, res, next) => {
  try {
    const page  = Math.max(1, parseInt(req.query.page)  || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 20));
    const skip  = (page - 1) * limit;

    const filter = {};
    if (req.query.status) filter.status = req.query.status;

    const [contacts, total] = await Promise.all([
      Contact.find(filter).select('-__v').sort({ createdAt: -1 }).skip(skip).limit(limit),
      Contact.countDocuments(filter),
    ]);

    res.status(200).json({
      success: true,
      data: contacts,
      pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
    });
  } catch (err) {
    next(err);
  }
};

// ─── PATCH /api/contact/:id/status (Admin) ──────────────────────────────────
exports.updateStatus = async (req, res, next) => {
  try {
    const { status, adminNote } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status, adminNote },
      { new: true, runValidators: true }
    ).select('-__v');

    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact entry not found.' });
    }
    res.status(200).json({ success: true, data: contact });
  } catch (err) {
    next(err);
  }
};

// ─── DELETE /api/contact/:id (Admin) ────────────────────────────────────────
exports.deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact entry not found.' });
    }
    res.status(200).json({ success: true, message: 'Contact deleted.' });
  } catch (err) {
    next(err);
  }
};
