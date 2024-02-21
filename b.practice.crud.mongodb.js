use("netflix");

// ? $eq, $lt, $lte, $gt,$gte, $ne
// db.movie.insertOne({
//   name: "Batman",
//   leadActor: "Christian Bale",
//   releaseYear: 2000,
//   length: 90,
//   language: "English",
// });

// db.movie.insertMany([
//   {
//     name: "Chhaka Panja",
//     leadActor: "Dipak Raj Giri",
//     releaseYear: 2017,
//     length: 180,
//     language: "Nepali",
//   },
//   {
//     name: "12th Fail",
//     leadActor: "Vikrant Massey",
//     releaseYear: 2023,
//     length: 90,
//     language: "Hindi",
//   },
// ]);

// db.movie.insertOne({
//   name: "Cast away",
//   leadActor: "Dicaprio",
//   releaseYear: 1997,
//   length: 180,
//   language: "English",
// });

// db.movie.insertOne({
//   name: "Captain America",
//   leadActor: "Chris Evans",
//   releaseYear: 2011,
//   length: 120,
//   language: "English",
// });

// db.movie.insertMany([
//   {
//     name: "18 Pages",
//     leadActor: " Nikhil Siddharth",
//     releaseYear: 2022,
//     length: 137,
//     language: "Hindi",
//   },
//   {
//     name: "Inception",
//     leadActor: "Leonardo DiCaprio",
//     releaseYear: 2010,
//     length: 148,
//     language: "English",
//   },
//   {
//     name: "Kabadi",
//     leadActor: "Dayahang Rai",
//     releaseYear: 2012,
//     length: 90,
//     language: "Nepali",
//   },
//   {
//     name: "3 Idiots",
//     leadActor: "Aamir Khan",
//     releaseYear: 2010,
//     length: 180,
//     language: "Hindi",
//   },
//   {
//     name: "A quite Place",
//     leadActor: "Camilla Bella",
//     releaseYear: 2018,
//     length: 90,
//     language: "English",
//   },
// ]);

//? find
// db.movie.find({ language: "English" });
// db.movie.find({ length: 90 });

//? update
// db.movie.updateOne(
//   { name: "Cast away" },
//   {
//     $set: {
//       leadActor: "leonardo DiCaprio",
//       releaseYear: 2000,
//       duration: 90,
//     },
//   }
// );

// db.movie.updateMany(
//   { length: 90 },
//   {
//     $set: {
//       releaseYear: 120,
//       bhasa: "French",
//       supportingActor: "Jennifer Anniston",
//       femaleActor: "Kate Winslet",
//     },
//   }
// );

//? delete
// db.movie.deleteOne(
//   { name: "12th Fail" },
//   {
//     $set: {
//       bhasa: "French",
//       femaleActor: "Kate Winslet",
//       supportingActor: "Jennifer Anniston",
//     },
//   }
// );

// db.movie.deleteMany({ bhasa: "French" });
//! maile only bhasa "French" lai delete garna khoje
//! ko but bhasa "French" ma vayeko sabai item delete
//! vayo.how can i delete only particular key value.

// db.movie.find();
