const express  = require('express');
const { body } = require('express-validator');
const router   = express.Router();

const companyCtrl  = require('../controllers/companyController');
const { protect }  = require('../middleware/auth');
const upload       = require('../middleware/upload');

// ─── Validators ───────────────────────────────────────────────────────────────
const companyRules = [
  body('companyName').trim().notEmpty().withMessage('Company name is required'),
  body('CIN').optional().trim(),
  body('PAN').optional().trim(),
  body('address').optional().trim().isLength({ max: 500 }),
  body('phone').optional().trim(),
  body('email').optional().isEmail().withMessage('Invalid email').normalizeEmail(),
  body('tagline').optional().trim().isLength({ max: 300 }),
];

// ─── Routes ───────────────────────────────────────────────────────────────────
// Public — Angular reads company details for footer / contact page
router.get('/', companyCtrl.getCompany);

// Admin protected
router.post('/',   protect, upload.single('logo'), companyRules, companyCtrl.createCompany);
router.put('/:id', protect, upload.single('logo'), companyRules, companyCtrl.updateCompany);

module.exports = router;
