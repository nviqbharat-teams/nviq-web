const express  = require('express');
const { body } = require('express-validator');
const router   = express.Router();

const fundsCtrl   = require('../controllers/fundsController');
const { protect } = require('../middleware/auth');

// ─── Validators ───────────────────────────────────────────────────────────────
const fundRules = [
  body('fundName').trim().notEmpty().withMessage('Fund name is required'),
  body('category')
    .notEmpty().withMessage('Category is required')
    .isIn(['Equity', 'Debt', 'Hybrid', 'ELSS', 'Index', 'Sectoral', 'Liquid', 'Other'])
    .withMessage('Invalid category'),
  body('risk')
    .notEmpty().withMessage('Risk level is required')
    .isIn(['Low', 'Moderate', 'High', 'Very High'])
    .withMessage('Invalid risk level. Use: Low, Moderate, High, Very High'),
  body('returns')
    .trim().notEmpty().withMessage('Returns is required (e.g. "12%" or "18.5%")'),
  body('description').optional().trim().isLength({ max: 1000 }),
  body('minSIP').optional().isInt({ min: 100 }).withMessage('Min SIP must be ≥ ₹100'),
  body('isFeatured').optional().isBoolean(),
  body('order').optional().isInt({ min: 0 }),
];

// ─── Routes ───────────────────────────────────────────────────────────────────
// Public — Angular frontend reads these
router.get('/',       fundsCtrl.getFunds);
router.get('/:id',    fundsCtrl.getFund);

// Admin protected
router.post('/',      protect, fundRules, fundsCtrl.createFund);
router.put('/:id',    protect, fundRules, fundsCtrl.updateFund);
router.delete('/:id', protect,            fundsCtrl.deleteFund);

module.exports = router;
