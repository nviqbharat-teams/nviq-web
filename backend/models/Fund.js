const mongoose = require('mongoose');

// Schema matches frontend slider response exactly:
// { fundName, returns, risk, description, category, minSIP, isFeatured }
const fundSchema = new mongoose.Schema(
  {
    fundName: {
      type: String,
      required: [true, 'Fund name is required'],
      trim: true,
      maxlength: [200, 'Fund name cannot exceed 200 characters'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: {
        values: ['Equity', 'Debt', 'Hybrid', 'ELSS', 'Index', 'Sectoral', 'Liquid', 'Other'],
        message: '{VALUE} is not a valid category',
      },
    },
    // "Moderate" / "Low" / "High" / "Very High"  ← matches frontend slider
    risk: {
      type: String,
      required: [true, 'Risk level is required'],
      enum: {
        values: ['Low', 'Moderate', 'High', 'Very High'],
        message: '{VALUE} is not a valid risk level',
      },
    },
    // String like "12%" or "18.5%" — matches frontend slider display
    returns: {
      type: String,
      required: [true, 'Returns is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
      default: '',
    },
    minSIP: {
      type: Number,
      default: 500,
      min: [100, 'Minimum SIP cannot be less than ₹100'],
    },
    minLumpsum: {
      type: Number,
      default: 5000,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

fundSchema.index({ category: 1, risk: 1, isActive: 1 });
fundSchema.index({ isFeatured: -1, order: 1 });

module.exports = mongoose.model('Fund', fundSchema);
