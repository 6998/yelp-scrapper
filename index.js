const dotenv = require('dotenv')

if(!process.env.ENV) // make sure we have env params
  dotenv.config()

const Yelp = require('yelp-fusion');
const yelp = Yelp.client(process.env.YELP);

const categories = ['chinese, All', 'pizza, All', 'italian, All', 'mexican, All', 'tradamerican']
const offsets = 

const main = () => {
  console.log("=============start=============")

  yelp.search({
    location: 'new york city, ny',
    categories: 'mexican, All'
  }).then(response => {
    json = response.jsonBody;
    console.log(response.jsonBody);
  }).catch(e => {
    console.log(e);
  });
}

main()
