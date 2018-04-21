const dotenv = require('dotenv')

'use strict';

if(!process.env.ENV) // make sure we have env params
	dotenv.config()

// Requiring the Dynamoose NPM package
var dynamoose = require('dynamoose');

// This will create a Dynamoose model "Cat" (which is basically like a DynamoDB table), it will allow for 2 properties in the schema, `id` (number) and `name` (string)
var Cat = dynamoose.model('Cat', { id: Number, name: String });

// This will create a new instance of our "Cat" model, with the `id` as 666, and `name` as 'Garfield'
var garfield = new Cat({id: 666, name: 'Garfield'});

// This will save our new object to DynamoDB (remember this happens asynchronously, so you need to be sure to wait before trying to access the object)
garfield.save();

// This will preform an DynamoDB get on the "Cat" model/table get the object with the `id` = 666 and return a promise with the returned object.
Cat.get(666).then(function (badCat) {
  console.log('Never trust a smiling cat. - ' + badCat.name);
});
