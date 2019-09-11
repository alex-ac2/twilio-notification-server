const express = require('express');
const router  = express.Router();
require('dotenv').config();

module.exports = (client) => {

  router.post("/", (req, res) => {
    console.log("sessions POST route hit");
    console.log('REQUEST_BODY: ', req.body);
    
    client.messages
      .create({
        body: 'This is a new test message from your twillio notification server',
        from: process.env.TWILIO_FROM_NUMBER,
        to: process.env.TEST_NUMBER
      })
      .then(message => console.log(message.sid));
    
      console.log("Message sent...?");

      res.sendStatus(200);

  });

  return router;
}