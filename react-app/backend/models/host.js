const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, minlength: 3 },
  phone: String,
  email: String,
});

module.exports = mongoose.model('Host', schema);
