

const fetch = (cat, callback) =>{
  // James's magic ( yelp )




  const fake = {
    Rating: (Math.random() * 5) ,
    NumberOfReviews: Math.random(),
    Recommended: 12313,
    RestaurantId: "test",
    Cuisine: cat
  }




  // array of businesses to
  return callback([fake]);
}

module.exports =  fetch