const dotenv = require('dotenv')
if (!process.env.ENV) // make sure we have env params
  dotenv.config()

var dynamoose = require('dynamoose');

// Create cat model with default options
var Cat = dynamoose.model('Cat', { id: Number, name: String });

// Create a new cat object
var garfield = new Cat({id: 666, name: 'Garfield'});

// Save to DynamoDB
console.log(garfield.save);
