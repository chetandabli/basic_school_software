const mongoose = require('mongoose');

const markSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  marksObtained: {
    type: Number,
    required: true,
  },
  isBacklog: {
    type: Boolean,
    default: false,
  },
});

const Mark = mongoose.model('Mark', markSchema);

module.exports = Mark;
