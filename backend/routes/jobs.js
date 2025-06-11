// Import required packages
const express = require('express');
const router = express.Router();

// Import the Job model we created
const Job = require('../models/Job');

// POST route: Add a new job listing to the database
// This is triggered when the frontend sends a job via POST request
router.post('/', async (req, res) => {
  try {
    // Create a new job using the data sent in the request
    const job = new Job(req.body);
    const savedJob = await job.save(); // Save the job to MongoDB
    res.status(201).json(savedJob); // Send back the saved job with status 201 (Created)
  } catch (err) {
    res.status(400).json({ message: err.message }); // If error, send 400 and error message
  }
});

// GET route: Fetch all job listings from the database
// This is triggered when the frontend wants to show jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find(); // Fetch all jobs
    res.json(jobs); // Send them back to the frontend
  } catch (err) {
    res.status(500).json({ message: err.message }); // If error, send 500
  }
});

// Export this router so we can use it in server.js
module.exports = router;
