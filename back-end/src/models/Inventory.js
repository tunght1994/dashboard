// models/Product.js
const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  images: {
    type: [String],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Inventory = mongoose.model('Inventory', InventorySchema);

module.exports = Inventory;
