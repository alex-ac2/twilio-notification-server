const express = require('express');
const router  = express.Router();
require('dotenv').config();

module.exports = (client) => {

  router.post("/", (req, res) => {
    console.log("sessions POST route hit");
    console.log('REQUEST_BODY: ', req.body);

    // notificationMessage & userPhoneNumber

    if (req.body.hasOwnProperty('notificationMessage') && req.body.hasOwnProperty('userPhoneNumber')) {
      client.messages
        .create({
          body: req.body.notificationMessage,
          from: process.env.TWILIO_FROM_NUMBER,
          to: req.body.userPhoneNumber
        })
        .then(message => console.log(message.sid));
      
        console.log("Message sent...?");
  
        res.status(200).send('SMS successfully sent')
      } else {
        console.log("Request body did not contain notificationMessage or userPhoneNumber")
        res.status(400).send('Request did not contain notificationMessage or userPhoneNumber')
      }

  });

  return router;
}