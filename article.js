const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title : String,
  subtitle : String,
  body : String,
  created_at : Date
});

module.exports = mongoose.model('Article', articleSchema);
