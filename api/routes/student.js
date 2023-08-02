const express = require('express');
const router = express.Router();
const Student = require('../models/student.model');

// Create a new student
router.post('/students', async (req, res) => {
  try {
    const { name, classx, section } = req.body;
    console.log(name, classx, section)
    const newStudent = new Student({ name, class: classx, section });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch all students
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
