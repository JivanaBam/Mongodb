use("imdb");

//? delete

//? deleteOne => deletes first document that matches the condition(filter)

//? deleteMany => deletes all the document that matches the filter

//? delete movies whose genres includes "Drama" and "Thriller"
// db.movies.deleteMany({ $and: [{ genres: "Drama" }, { genres: "Thriller" }] });
//? or
// db.movies.deleteMany({ genres: { $all: ["Drama", "Thriller"] } });
// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Thriller" }] });

// ? delete a movie whose name is "Manhattan Love Story"'
// db.movies.deleteOne({ name: "Manhattan Love Story" });
// db.movie.find({ name: "Manhattan Love Story" });

// ? delete movies whose  network country is "Canada"
// db.movies.deleteMany({ "network.country.name": "Canada" });
// db.movies.find({ "network.country.name": "Canada" });

// ? delete movies whose rating is greater than 8 and less than or equal to 9
// db.movies.deleteMany({
//   $and: [{ "rating.average": { $gt: 8 } }, { "rating.average": { $lte: 9 } }],
// });
// db.movies.find({
//   $and: [{ "rating.average": { $gt: 8 } }, { "rating.average": { $lte: 9 } }],
// });

db.movies.find();
