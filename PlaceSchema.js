'use strict';
const dotenv = require('dotenv')
if(!process.env.ENV) // make sure we have env params
	dotenv.config()

const dynamoose = require('dynamoose');

const Place = dynamoose.model('Place', {
  Rating: Number,
  NumberOfReviews: Number,
  Recommended: Number,
  RestaurantId: String,
  Cuisine: String,
});

module.exports =  Place