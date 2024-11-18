const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  name: String,
  location: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true }
  },
  status: { type: String, enum: ['available', 'busy'], default: 'available' }
});

driverSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Driver', driverSchema);
