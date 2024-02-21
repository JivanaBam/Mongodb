use("imdb");

//? read operator
//? comparison operator
// ? $eq, $lt, $lte, $gt,$gte, $ne

// ?$eq
// db.movies.find({ name: { $eq: "Under the Dome" } });
//or
// db.movies.find({ name: "Under the Dome" });

// ?$lt
// db.movies.find({ runtime: { $lt: 80 } });
// db.movies.find({ id: { $lt: 5 } });

// ?gt
// db.movies.find({ "rating.average": { $gt: 9 } });

// ? find movies whose language is Japanese
// db.movies.find({ language:  "Japanese " });
// db.movies.find({ language: { $eq: Japanese } });

// ?find movies whose runtime is less than 30
// db.movies.find({ runtime: { $lt: 30 } });

// ? find movies whose runtime is greater than or equal to 90
// db.movies.find({ runtime: { $gte: 90 } });

// ? find movies whose rating is less than or equal to 6
// db.movies.find({ rating: { $lte: 6 } });

//? $ne
//? find movies whose status is not "ended"
// db.movies.find({ status: { $ne: "Ended" } });

//? find movies whose weight is not 75
// db.movies.find({ weight: { $ne: 75 } });

// ?find movies whose genres includes "crime"
// db.movies.find({ genres:{$eq: "Crime"} });

//? logical operator
//? $and $or $nor $not

//! $and => return all documents that match the condition of both clauses.

//? find movies whose weight is greater than 75 and rating is greater than 7
// db.movies.find({
//   $and: [{ weight: { $gt: 75 } }, { "rating.average": { $gt: 7 } }],
// });

//? find movies whose genres is "Drama" and "Crime"
// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Crime" }] });

//? find movies whose network country name is " United States" and status is "running"
// db.movies.find({
//   $and: [{ "network.country.name": "United States" }, { status: "Running" }],
// });

//? find movies whose rating is greater than 7 and greater and equal to
// db.movies.find({
//   $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $gte: 9 } }],
// });

//! or => return all documents that match the condition of either clause.

//? find movies whose rating is greater than 8 or genres is "Thriller"
// db.movies.find({
//   $or: [{ "rating.average": { $gt: 8 } }, { genres: "Thriller" }],
// });
//? both are correct...
// db.movies.find({
//   $or: [{ rating: { $gt: 8 } }, { genres: { $eq: "Thriller" } }],
// });

//? find movies whose id is less than 5 or run time is less than 90
// db.movies.find({$or:[{id:{$lt:5}},{rumtime:90}]})
//? both are correct...
// db.movies.find({ $or: [{ id: { $lt: 5 } }, { runtime: { $lt: 90 } }] });

//? Assignment............

//?Find movies whose status is "Ended"
// db.movies.find({ status: "Ended" });
//? both are correct...
// db.movies.find({ status: { $eq: "Ended" } });

// ?find movies whose rating is 9
// db.movies.find({ "rating.average": 9 });
//? both are correct...
// db.movies.find({ rating: { $eq: 9 } });

// ?find movies whose rating is greater than 7 and less than 9
// db.movies.find({
//   $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lt: 9 } }],
// });

// ?find movies whose genres is "Thriller"
// db.movies.find({ genres: "Thriller" });
// db.movies.find({ genres: { $eq: "Thriller" } });

// ?find movies whose status is Running
// db.movies.find({ status: "Running" });
// db.movies.find({ status: { $eq: "Running" } });

//? find movies whose status is Ended and runtime is 60
// db.movies.find({ $and: [{ status: "Ended" }, { runtime: 60 }] });

// ?find movies whose weight is 75 and network country is Canada
// db.movies.find({
//   $and: [{ weight: 75 }, { "network.country.name": "Canada" }],
// });

// ?find movies whose weight is 96 or runtime is 60
// db.movies.find({ $or: [{ weight: 96 }, { runtime: 60 }] });

//! not => return documents that do not match the query expression
// ? $not or $ne is same

// ? find movies whose rating average is not 9
// db.movies.find({ $not: [{ "rating.average": 9 }] });

//? find movies whose status is not "Ended"
// db.movies.find({ status: { $ne: "Ended" } });

//! nor => return all the documents that fail to match both clauses

//? find movies whose status is neither "Running" nor language is "English"
// db.movies.find({ $nor: [{ status: "Running" }, { language: "English" }] });

db.movies.find();
