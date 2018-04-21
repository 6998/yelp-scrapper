const dotenv = require('dotenv')
if (!process.env.ENV) // make sure we have env params
  dotenv.config()

const _ = require("lodash");

const yelpResults = require('./yelpResults')

const saveFunc = require('./saveResult')
const categories = ['chinese, All', 'pizza, All', 'italian, All', 'mexican, All', 'tradamerican']

const async = require('async');

let allplaces = [];

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
}


const scrape = (cb) => {
  async.eachSeries(categories, (cat, callback) => {
    console.log(` - scrape ${cat}`)
    yelpResults(cat, (arr) => {
      save(arr, cat, (err)=>{
        console.log(" ----- savedCounter:", savedCounter);
        return callback(err);
      })
    });
  });
};

const save = (arr, cat, callback) => {
  async.eachSeries(arr, (item, cb)=>{
    saveFunc(item, cat, (err)=>{
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
