use("imdb");

// ?evaluation operator

// ? $regex => regular expression
// ? $expr => express
//? $in => in operator
//? $nin => not in operator

//! $regex => use in such condition where we remember small part of that documents

// ? find movies whose summary include "Pacific"
// db.movise.find({ summary: { $regex: "Pacific", $options: "i" } });

// ? find movies whose name is "Morty"
// db.movies.find({ name: { $regex: "Morty" } });

//? find movies whose summary includes "Starling City"
// db.movies.find({summary:{$regex:"Starling City"}})

//! $expr => use to find comprassion field
// db.sales.insertMany([
//   {
//     name: "TV",
//     order: 100,
//     volume: 50,
//   },
//   {
//     name: "Bottle",
//     order: 70,
//     volume: 150,
//   },
//   {
//     name: "Mouse",
//     order: 25,
//     volume: 10,
//   },
//   {
//     name: "Rice",
//     order: 10,
//     volume: 500,
//   },
// ]);

// ?find product whose order is greater than 100
// db.product.find({ order: { $gt: 100 } });

// ? find product whose order is greater than volume
// ?order>volume
// db.sales.find({ $expr: { $gt: ["$order", "$volume"] } });

// !$in => select the document where the value of fiels equals to value in specific array
//? find movies whose rating is 7 or 7.5 or 8 or 8.5 or 9 or 9.3
// db.movies.find({
//   $or: [
//     { "rating.average": 7 },
//     { "rating.average": 7.5 },
//     { "rating.average": 8 },
//     { "rating.average": 8.5 },
//     { "rating.average": 9 },
//     { "rating.average": 9.3 },
//   ],
// });
// db.movies.find({ "rating.average": { $in: [7, 7.5, 8, 8.5, 9, 9.3] } });

//! nin => select element that are not in array
// ? find movies whose genres is neither "Thriller" or "Crime" nor "Supernatural"
// db.movies.find({ $nor: [{ genres: "Thriller" }, { genres: "Crime" },{genres:"Supernatural"}] });
// db.movies.find({ genres: { $nin: ["Thriller", "Crime", "Supernatural"] } });
