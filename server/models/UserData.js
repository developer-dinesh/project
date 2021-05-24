const mongoose = require('mongoose')
const userData = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  emailId: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  }, 
  bio: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },image: {
    type: String,
    required: true
  },background: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('userData', userData)