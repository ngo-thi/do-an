const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: String,
  location: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true }
  },
  status: { type: String, enum: ['pending', 'in-progress', 'delivered'], default: 'pending' }
});

orderSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Order', orderSchema);
