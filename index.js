const dotenv = require('dotenv')
if (!process.env.ENV) // make sure we have env params
  dotenv.config()

const yelpResults = require('./yelpResults')
const saveFunc = require('./saveResult')

const categories = ['chinese, All', 'pizza, All', 'italian, All', 'mexican, All', 'tradamerican']

const async = require('async');

let savedCounter = 0;
const main = () => {
  console.log("=============start=============")
  scrape((err) => {
    if(err) {
      console.log(err)
    } else {
      console.log("done without errors");
      console.log("savedCounter:", savedCounter);
    }
  });
  // Place.scan({NumberOfReviews:3}, function(err, place) {
  //   if(err) { return console.log(err.message); }
  //   console.log(place);
  // });
}


const scrape = (cb) => {
  async.each(categories, (cat, callback) => {
    yelpResults(cat, (arr) => {
      save(arr, (err)=>{
        return callback(err);
      })
    });
  }, (err) => {
    return cb(err)
  })
};

const save = (arr, callback) => {
  async.each(arr, (item, cb)=>{
    saveFunc(item, (err)=>{
      if(err) {
        console.log("error saving!!!")
      } else {
        savedCounter++;
      }
      return cb(err)
    })
  }, (err)=>{
    return callback(err);
  })
};


main()
