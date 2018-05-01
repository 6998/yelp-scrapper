'use strict';
const dotenv = require('dotenv')
if(!process.env.ENV) // make sure we have env params
	dotenv.config()

const shortId = require('shortid');
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
  RestaurantId:  { type: String },
  Cuisine: String,
	Name: {type: String },
	Address: String,
	Coordinates:  { latitude: Number, longitude: Number},
	ZipCode: String
}, { update: false });

module.exports =  Place
