const dotenv = require('dotenv')
if (!process.env.ENV) // make sure we have env params
  dotenv.config()

const Yelp = require('yelp-fusion');
const yelp = Yelp.client(process.env.YELP);

const categories = ['chinese, All', 'pizza, All', 'italian, All', 'mexican, All', 'tradamerican']
const Place = require('./PlaceSchema');

const async = require('async');

const yelpResults = require('./yelpResults')

const main = () => {
  console.log("=============start=============")
  scrape((results)=>{
    console.log(results)
  });

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

  // Place.scan({NumberOfReviews:3}, function(err, place) {
  //   if(err) { return console.log(err.message); }
  //   console.log(place);
  // });
}


const scrape = (cb) => {
  async.each(categories, (cat, callback)=>{
    yelpResults(cat, (arr)=>{
      callback(null);
    });
  }, (err)=>{
    cb("done")
  })
}

const samePlaces = () => {

}

const sameRandomPlacesToCSV = () => {

}

main()
