# Twilio Notification Server

Twilio Notification Server using simple restful api routing. 

#### Sample Curl Post Request:

```
curl -d '{"notificationMessage":"Test notification message", "userPhoneNumber":"+14165559021"}' -H "Content-Type: application/json" -X POST http://localhost:5002/notification

```