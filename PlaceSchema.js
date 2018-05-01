'use strict';
const dotenv = require('dotenv')
if(!process.env.ENV) // make sure we have env params
	dotenv.config()

const dynamoose = require('dynamoose');

const Place = dynamoose.model('yelp-restaurants', {
	id: String,
	Name: {type: String },
  RestaurantId:  { type: String },
  Recommended: Number,
  Rating: Number,
  NumberOfReviews: Number,
	Coordinates:  { latitude: Number, longitude: Number},
	ZipCode: String,
	Address: String,
  Cuisine: String,
}, {
	throughput: 5,
	timestamps: {
		createdAt: 'createdAtTimestamp',
    updatedAt: 'insertedAtTimestamp'
	}
});

module.exports =  Place
