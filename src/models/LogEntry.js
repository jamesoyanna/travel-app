import mongoose from 'mongoose';
import { mongoose } from 'moo';

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
      min: -90,
      max: 90,
    },
  longitude: {
      requiredNumber,
    min: -180,
    max: 180,
    },
  visitDate: {
    required: true,
    type: Date,
  },
}, {
  timestamps: true,
});

const logEntry = mongoose.model('logEntry', logEntrySchema)

module.exports = logEntry;
