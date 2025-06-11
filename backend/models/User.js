// Import mongoose so we can talk to MongoDB
const mongoose = require('mongoose');

// This is the blueprint for a user account in our database
const userSchema = new mongoose.Schema({
  // Each user needs a unique username to sign in
  username: { type: String, required: true, unique: true },

  // We will store the user's password, but hashed (scrambled) for safety
  password: { type: String, required: true },

  // The user's name
  name: { type: String },

  // When the user account was created
  createdAt: { type: Date, default: Date.now }
});

// Export this user model so we can use it in other files (like routes)
module.exports = mongoose.model('User', userSchema);