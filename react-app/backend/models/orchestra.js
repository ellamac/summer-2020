const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, minlength: 2 },
  accommodation: { type: mongoose.Schema.Types.ObjectId, ref: 'Place' },
  host: { type: mongoose.Schema.Types.ObjectId, ref: 'Host' },
});

module.exports = mongoose.model('Orchestra', schema);
