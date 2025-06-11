// 📁 backend/routes/auth.js
// This file handles signup/login-related backend logic (API endpoints)

const express = require('express');
const bcrypt = require('bcryptjs'); // 🔒 Used to securely hash passwords
const jwt = require('jsonwebtoken'); // Add this for JWT
const router = express.Router();
const User = require('../models/user'); // 👤 Our MongoDB user model

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey'; // Secret key for JWT

// 🛠 POST endpoint to register a new user
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body; // 📥 Get username and password from the form

    // 🚫 If a user with this username already exists, stop here
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    // 🔐 Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // 💾 Create and save the new user to the database
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    // ✅ Success message
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('❌ Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// 🛠 POST endpoint to log in a user
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body; // 📥 Get login credentials

    // 🔍 Find the user in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // 🔐 Compare the entered password with the hashed one in DB
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ username: user.username, id: user._id }, JWT_SECRET, { expiresIn: '7d' });

    // ✅ Login success
    res.status(200).json({ message: 'Login successful', user: { username: user.username }, token });
  } catch (error) {
    console.error('❌ Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;