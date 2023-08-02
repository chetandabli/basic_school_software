const express = require('express');
const router = express.Router();
const Mark = require('../models/mark.model');

// Create a new mark
router.post('/marks', async (req, res) => {
  try {
    const { student, subject, marksObtained, isBacklog } = req.body;
    const newMark = new Mark({ student, subject, marksObtained, isBacklog });
    await newMark.save();
    res.status(201).json(newMark);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch all marks
router.get('/marks', async (req, res) => {
  try {
    const marks = await Mark.find();
    res.json(marks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
