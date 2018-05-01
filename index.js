const dotenv = require('dotenv')
if (!process.env.ENV) // make sure we have env params
  dotenv.config()

const _ = require("lodash");
const yelpResults = require('./yelpResults')
const saveFunc = require('./saveResult')
const async = require('async');

const categories = ['chinese, All', 'pizza, All', 'italian, All', 'mexican, All', 'tradamerican']

let allplaces = [];
let savedCounter = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const main = async () => {
  console.log("=============start=============")

  await scrape()
  console.log("savedCounter:", savedCounter);
}

let res = []

const scrape = async () => {
  async.eachSeries(categories, async cat => {
    console.log(`SCRAPE [${cat}]`);
    arr = await yelpResults(cat);
    console.log(`returned ${arr.length} results`)

    res = res.concat(arr.map(x => x.id));
    await sleep(500);

    console.log('')

    await save(arr, cat);
    break
  });
};

const save = async (arr, cat) => {
  async.eachSeries(arr, async biz => {
    saveFunc(item, cat, (err)=>{
        savedCounter++;
  })
};

main()






//
