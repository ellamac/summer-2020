const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, minlength: 2 },
  starts: { type: Date, required: true },
  ends: Date,
  description: { type: String, required: true, minlength: 2 },
  place: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Place',
    },
  ],
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Orchestra',
    },
  ],
});

module.exports = mongoose.model('Event', schema);
