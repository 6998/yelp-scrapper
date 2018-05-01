const Place = require('./PlaceSchema');

const save = async (item, category) => {
  let address = "";

  if(item.location.address1)
    address += item.location.address1;

  if(item.location.address2)
    address += item.location.address2;

  const place = new Place({
    id: item.id,
    Name: item.name,
    RestaurantId: item.id,
    Recommended: 1,
    Rating: item.rating,
    NumberOfReviews: item.review_count,
    Coordinates: item.coordinates,
    ZipCode: item.location.zip_code,
    Address: address,
    Cuisine: category,
  });

  place.save(err => { if (err){ console.error(err); }})
  console.log('saved')
}

module.exports = save
