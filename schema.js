const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  commentedAt: {
    type: Date,
    default: Date.now,
  },
});

const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
  },
  content: {
    type: String,
    required: true,
    minlength: 50,
  },
  author: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
  },
  category: {
    type: String,
    default: 'General',
  },
  likes: {
    type: [String],
  },
  comments: [CommentSchema],
}, {
  timestamps: true,
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);