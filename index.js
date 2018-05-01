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

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

const main = async () => {
  console.log("=============start=============")
  await scrape()
  console.log("savedCounter:", savedCounter);
}

let res = []

const scrape = async () => {
  for (let cat of categories) {
    console.log(`SCRAPE [${cat}]`);

    arr = await yelpResults(cat);
    res = res.concat(arr.map(x => x.id));

    await save(arr, cat);

    console.log(`fetch returned ${arr.length} results`)
    console.log('')
  }
};

id = 1
const save = async (arr, cat) => {
  for (let b of arr) {
    await saveFunc(id++, b, cat);
    await sleep(200)
  }
};

main()






//
