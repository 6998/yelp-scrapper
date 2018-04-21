const dotenv = require('dotenv')

if(!process.env.ENV) // make sure we have env params
  dotenv.config()


const Yelp = require('yelp-fusion');
const yelp = Yelp.client(process.env.YELP);

const main = ()=>{
  console.log("=============start=============")
  yelp.search({
    term:'Four Barrel Coffee',
    location: 'san francisco, ca'
  }).then(response => {
    console.log(response.jsonBody);
  }).catch(e => {
    console.log(e);
  });
}

main()