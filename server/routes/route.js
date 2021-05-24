const express = require('express');
const router = express.Router();
const User = require('../models/UserData');

router.post('/signup', async (request, response) => {
  const userInfo = new User({
    userName: request.body.userName,
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    emailId: request.body.emailId,
    phoneNumber: request.body.phoneNumber,
    bio: request.body.bio
  })
  
  userInfo.save()
    .then(data => {
      console.log(data)
      response.json(data)
    })
    .catch(error => {
      response.json(error)
    })
})

module.exports = router