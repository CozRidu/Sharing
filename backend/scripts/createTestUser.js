const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const User = require('../models/User');

async function createTestUser() {
  await mongoose.connect(process.env.MONGO_URI);
  const email = 'test@example.com';
  const password = await bcrypt.hash('password123', 10); // 10 rounds salt
  const name = 'Test User';

  const existing = await User.findOne({ email });
  if (existing) {
    console.log('User already exists');
    process.exit(0);
  }

  const user = new User({ email, password, name });
  await user.save();
  console.log('Test user created:', email);
  process.exit(0);
}

createTestUser();
