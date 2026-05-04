const mongoose = require('mongoose');

// Schema matches frontend GET /api/company response exactly:
// { companyName, CIN, PAN, address, phone, email, logo, tagline, ... }
const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true,
      maxlength: [200, 'Company name cannot exceed 200 characters'],
    },
    CIN: {
      type: String,
      trim: true,
      uppercase: true,
    },
    PAN: {
      type: String,
      trim: true,
      uppercase: true,
    },
    // Flat string to match frontend: "Vill. Jamalpur, Teh. Malakhera, Alwar, Rajasthan"
    address: {
      type: String,
      trim: true,
      maxlength: [500, 'Address cannot exceed 500 characters'],
    },
    phone: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    website: {
      type: String,
      trim: true,
    },
    logo: {
      type: String,
      default: null,
    },
    tagline: {
      type: String,
      trim: true,
      maxlength: [300, 'Tagline cannot exceed 300 characters'],
    },
    foundedYear: {
      type: Number,
    },
    socialLinks: {
      linkedin:  { type: String, trim: true, default: '' },
      twitter:   { type: String, trim: true, default: '' },
      facebook:  { type: String, trim: true, default: '' },
      instagram: { type: String, trim: true, default: '' },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Company', companySchema);
