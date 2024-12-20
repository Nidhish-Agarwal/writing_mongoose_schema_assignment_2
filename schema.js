const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  username: String,
  message: {
    type: String,
    required: true,
  },
  commentedAt: {
    type: Date,
    default: Date.now,
  },
});

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    minlength: 5,
  },
  content: {
    type: String,
    required: true,
    minlength: 50,
  },
  author: String,
  tags: [String],
  category: {
    type: String,
    default: "General",
  },
  likes: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
  comments: [commentSchema],
});

module.exports = mongoose.module("BlogPost", blogPostSchema);
