const dotenv = require('dotenv')
const Yelp = require('yelp-fusion');
const Place = require('./PlaceSchema');
const async = require('async');

if (!process.env.ENV) // make sure we have env params
  dotenv.config()

const yelp = Yelp.client(process.env.YELP);

const location = 'new york city, ny';

const fetch = async (cat, callback) =>{
  console.log(" -- starting to look for", cat)
  let result = [];
  let offset = 0;

  while (offset < 50) {
    console.log(" --- offset:", offset)
    let res = await yelp.search({
      location,
      offset,
      categories: cat,
      limit: 50
    });

    const json = res.jsonBody;
    result = result.concat(json.businesses)
    offset += 50;
    break;
  }

  //console.log(result);
  //console.log(result.length);

  return callback(result);
}

//fetch('mexican, All', () => {})

module.exports = fetch
