// Import the Express library to create our backend server
const express = require('express');

// Import Mongoose to connect to MongoDB
const mongoose = require('mongoose');

// Import dotenv to load secret values (like MongoDB password) from the .env file
require('dotenv').config();

// Create an Express app (this represents your server)
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Import and use CORS to allow cross-origin requests
const cors = require('cors');
app.use(cors());

/*
  This sets up a route (a URL path) at "/".
  When someone visits http://localhost:5001 in a browser,
  this code will run and send back a simple message.
*/
app.get('/', (req, res) => {
  // Send a message back to the user to confirm the server works
  res.send('👋 Hello! Your backend is working!');
});

/*
  Connect to MongoDB Atlas using the connection string stored in .env
  If the connection is successful, print a confirmation message.
  If it fails, show the error in the terminal.
*/

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Atlas connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

/*
  Start the server.
  This tells your computer to "listen" for requests on port 5001.
  If someone opens http://localhost:5001, the server will respond.
*/
app.listen(5001, () => {
  // Print a message in the terminal to let you know the server is running
  console.log('✅ Server is running on http://localhost:5001');
});

// Import and use the listings routes
const listingsRouter = require('./routes/listings');
app.use('/api/listings', listingsRouter);

// Import and use the auth routes for user login
const authRouter = require('./routes/auth');
app.use('/api/users', authRouter);