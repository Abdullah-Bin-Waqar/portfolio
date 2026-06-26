const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  description: { type: String },
  category: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Experience', ExperienceSchema);
