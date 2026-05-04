const express  = require('express');
const { body } = require('express-validator');
const router   = express.Router();

const servicesCtrl = require('../controllers/servicesController');
const { protect }  = require('../middleware/auth');
const upload       = require('../middleware/upload');

// ─── Validators ───────────────────────────────────────────────────────────────
const serviceRules = [
  body('title').trim().notEmpty().withMessage('Title is required').isLength({ max: 150 }),
  body('description').trim().notEmpty().withMessage('Description is required').isLength({ max: 2000 }),
  body('icon').optional().trim(),
  body('order').optional().isInt({ min: 0 }).withMessage('Order must be a positive integer'),
  body('tags').optional().isArray(),
];

// ─── Routes ───────────────────────────────────────────────────────────────────
// Public — Angular services section
router.get('/',       servicesCtrl.getServices);
router.get('/:id',    servicesCtrl.getService);

// Admin protected
router.post('/',      protect, upload.single('image'), serviceRules, servicesCtrl.createService);
router.put('/:id',    protect, upload.single('image'), serviceRules, servicesCtrl.updateService);
router.delete('/:id', protect, servicesCtrl.deleteService);

module.exports = router;
