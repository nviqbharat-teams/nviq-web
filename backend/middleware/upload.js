const multer  = require('multer');
const path    = require('path');
const fs      = require('fs');

const ALLOWED_TYPES = /jpeg|jpg|png|gif|webp|svg/;
const MAX_SIZE_MB   = Number(process.env.MAX_FILE_SIZE_MB) || 5;

// Ensure uploads directory exists
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const folder = path.join(__dirname, '..', 'uploads');
    ensureDir(folder);
    cb(null, folder);
  },
  filename(req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e6)}`;
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

const fileFilter = (req, file, cb) => {
  const ext  = path.extname(file.originalname).toLowerCase().slice(1);
  const mime = file.mimetype;

  if (ALLOWED_TYPES.test(ext) && ALLOWED_TYPES.test(mime)) {
    cb(null, true);
  } else {
    cb(
      new Error(`Invalid file type. Allowed: ${ALLOWED_TYPES.source.replace(/\|/g, ', ')}`),
      false
    );
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: MAX_SIZE_MB * 1024 * 1024 },
});

module.exports = upload;
