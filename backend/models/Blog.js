const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, default: 'General' },
  summary: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, default: 'Abdullah Bin Waqar' },
  published: { type: Boolean, default: true },
  tags: { type: [String], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);
