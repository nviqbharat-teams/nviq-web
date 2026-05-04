const express = require('express');
const { body  } = require('express-validator');
const router  = express.Router();

const authCtrl = require('../controllers/authController');
const { protect } = require('../middleware/auth');

// ─── Validation rules ────────────────────────────────────────────────────────
const registerRules = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
  body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
    .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
    .matches(/[0-9]/).withMessage('Password must contain at least one number'),
  body('role').optional().isIn(['admin', 'superadmin']).withMessage('Invalid role'),
];

const loginRules = [
  body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('password').notEmpty().withMessage('Password is required'),
];

// ─── Routes ──────────────────────────────────────────────────────────────────
router.post('/register', registerRules, authCtrl.register);
router.post('/login',    loginRules,    authCtrl.login);
router.get('/me',        protect,       authCtrl.getMe);

module.exports = router;
