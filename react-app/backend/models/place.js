const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, minlength: 2 },
  address: { type: String, required: true, minlength: 2 },
  info: String,
  image: String,
});

module.exports = mongoose.model('Place', schema);
