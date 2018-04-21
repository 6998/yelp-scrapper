const dotenv = require('dotenv')
if (!process.env.ENV) // make sure we have env params
  dotenv.config()


const Yelp = require('yelp-fusion');
const yelp = Yelp.client(process.env.YELP);

const Place = require('./PlaceSchema')


const main = () => {
  console.log("=============start=============")

  // Place.create({
  //   Rating: 123,
  //   NumberOfReviews: 123,
  //   Recommended: 13,
  //   RestaurantId: "test",
  //   Cuisine: "test"
  // }, function (err, odie) {
  //   if (err) {
  //     return console.log(err);
  //   } else {
  //     console.log("Saved")
  //   }
  // })

  // Place.get({RestaurantId: "test"}).then(function (place) {
  //   if (place)
  //     console.log(place)
  // }).catch(e => {
  //   console.log(e)
  // });

  Place.scan({NumberOfReviews:3}, function(err, place) {
    if(err) { return console.log(err.message); }
    console.log(place);
  });

}


const scarpPlaces = () => {
  yelp.search({
    term: 'Four Barrel Coffee',
    location: 'san francisco, ca'
  }).then(response => {
    console.log(response.jsonBody);
  }).catch(e => {
    console.log(e);
  });
}

const samePlaces = () => {

}

const sameRandomPlacesToCSV = () => {

}
main()