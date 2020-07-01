var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

 
const accountSid = 'AC1aeae7c6ab1bc3221325a5d36d1bdd96';
const authToken = '3e90d6ea3d0e1996cd9198d42ebf6cf6';

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
       to: '+16512807946'
     })
    .then(message => console.log(message.sid));
    res.sendStatus(200)
  } else {
    client.messages
    .create({
       body: 'Alert! Alert! Server Security Breach!',
       from: '+12058518621',
       to: '+16512807946'
     })
    .then(message => console.log(message.sid));
    res.sendStatus(404)
  }
  console.log("Sent");
})

app.post('/uproute', function(req, res) {
  if (req.body.userId === 'gt8Y-GLLpg)z]2_p') {
    res.sendStatus(200)
    //   client.messages
    // .create({
    //    body: 'Account Successful',
    //    from: '+12058518621',
    //    to: '+17633608438'
    //  })
    // .then(message => console.log(message.sid));
  } else {
    client.messages
    .create({
       body: 'Alert! Alert! Server Security Breach!',
       from: '+12058518621',
       to: '+16512807946'
     })
    .then(message => console.log(message.sid));
    res.send(404)
  }
})

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

console.log("Server Up")
