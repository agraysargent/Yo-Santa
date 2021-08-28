const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;