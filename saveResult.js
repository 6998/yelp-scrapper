const Place = require('./PlaceSchema');

const save = async (id, item, category) => {
  let address = "";

  if(item.location.address1)
    address += item.location.address1;

  if(item.location.address2)
    address += item.location.address2;

  const place = new Place({
    id: id,
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

  await place.save()
  console.log(`save ${place.id}`)
}

module.exports = save
