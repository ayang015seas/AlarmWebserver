var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

 
const accountSid = 'AC1aeae7c6ab1bc3221325a5d36d1bdd96';
const authToken = '511d4e3771ee2bd0ac75996839f7a595';
const client = require('twilio')(accountSid, authToken);

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/', function (req, res){
  console.log("Hit");
  if (req.body.userId === 'gt8Y-GLLpg)z]2_p') {
    client.messages
    .create({
       body: 'Alert! Alert! Robbery In Progress!',
       from: '+12058518621',
       to: '+17633608438'
     })
    .then(message => console.log(message.sid));
    res.sendStatus(200)
  } else {
    client.messages
    .create({
       body: 'Alert! Alert! Server Security Breach!',
       from: '+12058518621',
       to: '+17633608438'
     })
    .then(message => console.log(message.sid));
    res.sendStatus(404)
  }
  console.log("Sent");
})

app.post('/uproute', function(req, res) {
  if (req.body.userId === 'gt8Y-GLLpg)z]2_p') {
    res.sendStatus(200)
      client.messages
    .create({
       body: 'Account Successful',
       from: '+12058518621',
       to: '+17633608438'
     })
    .then(message => console.log(message.sid));
  } else {
    client.messages
    .create({
       body: 'Alert! Alert! Server Security Breach!',
       from: '+12058518621',
       to: '+17633608438'
     })
    .then(message => console.log(message.sid));
    res.send(404)
  }
})

app.listen(3000);
console.log("Server Up")
