const mongoose = require("mongoose");
const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, default: Date.now() },
  categories: { type: Array },
  wordCount: { type: Number, required: true },
  time: { type: Number },
  featuredImage: { type: String },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
});

module.exports = new mongoose.model("Blog", BlogSchema);
