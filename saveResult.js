const Place = require('./PlaceSchema');
const save = (item, cb)=> {
  Place.create(item, function (err, p) {
    if (err) {
      console.log(err);
    } else {
    }
    return cb(err);
  })
}

module.exports =  save