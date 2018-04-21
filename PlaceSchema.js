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
  Cuisine: String
});

// var garfield = new Cat({id: 667, name: 'Garfield'});
//
// garfield.save();
//
// Cat.get(666).then(function (badCat) {
//   console.log('Never trust a smiling cat. - ' + badCat.name);
// });

module.exports =  Place