'use strict';
const dotenv = require('dotenv')
if(!process.env.ENV) // make sure we have env params
	dotenv.config()
var shortId = require('shortid');

const dynamoose = require('dynamoose');
const Place = dynamoose.model('Place', {
  id: {
    type: String,
    hashKey: true,
    default: shortId.generate
  },
  Rating: Number,
  NumberOfReviews: Number,
  Recommended: Number,
  RestaurantId:  { type: String , hashKey: true },
  Cuisine: String,
	Name: String,
	Address: String,
	Coordinates:  {latitude: Number, longitude: Number},
	ZipCode: String
});

module.exports =  Place