const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredNumber = {
  type: String,
  required: true,
};

const logEntrySchema = new Schema({
  tile: {
    type: String,
    required: true,
  },
  description: String,
  comments: String,
  image: String,
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0,
  },
  latitude: {
    requiredNumber,
  },
  longitude: {
    requiredNumber,
  },
  visitDate: {
    required: true,
    type: Date,
  },
}, {
  timestamps: true,
});

const logEntry = mongoose.model('logEntry', logEntrySchema);

module.exports = logEntry;
