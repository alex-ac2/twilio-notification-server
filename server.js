const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5002;

// Twilio Account Details
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Routes
const notificationRoutes = require('./routes/notification');

// Static route
app.use(express.static('public'));

// Notification routes
app.use("/notification", notificationRoutes(client));

app.listen(port, () => console.log(`Twilio Notification Server is running on port ${port}`));