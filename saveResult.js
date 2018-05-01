const Place = require('./PlaceSchema');
const save = (item, category, cb) => {

  let address = "";
  if(item.location.address1)
    address += item.location.address1;

  if(item.location.address2)
    address += item.location.address2;
  const place = new Place({
    Rating: item.rating,
    NumberOfReviews: item.review_count,
    RestaurantId: item.id,
    Cuisine: category,
    Name: item.name,
    Address: address,
    Coordinates: item.coordinates,
    ZipCode: item.location.zip_code,
    id: item.id
  });

  place.save(function (err, p) {
    if (err) {
      console.log(err);
    } else {
    }
    return cb(err);
  })
}

module.exports =  save
