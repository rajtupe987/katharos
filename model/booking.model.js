const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
    default: function () {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 5);
      return currentDate;
    },
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'canceled'],
    default: 'pending',
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
