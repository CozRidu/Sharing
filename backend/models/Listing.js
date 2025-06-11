const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  images: [String], // Array of image URLs
  category: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, default: Date.now },
  seller: {
    name: String,
    rating: Number,
    joinDate: Date
  }
});

module.exports = mongoose.model('Listing', ListingSchema);
