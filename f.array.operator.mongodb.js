use("imdb");

//? array read operations
//? $all => use in array only
//? $elemMatch => use when single element's values are match
//? $size => to find the size array element

// db.students.insertMany([
//   {
//     name: "Manish",
//     favoriteSingers: ["Arijit", "Menuka", "Shreya"],
//     hobbies: [
//       {
//         name: "Badminton",
//         frequency: 5,
//       },
//       {
//         name: "PubG",
//         frequency: 7,
//       },
//       {
//         name: "Dancing",
//         frequency: 2,
//       },
//     ],
//   },

//   {
//     name: "Sona",
//     favoriteSingers: ["Sonu", "Narayan", "Pramod"],
//     hobbies: [
//       {
//         name: "Singing",
//         frequency: 4,
//       },
//       {
//         name: "Football",
//         frequency: 5,
//       },
//       {
//         name: "Volleyball",
//         frequency: 3,
//       },
//     ],
//   },

//   {
//     name: "Arun",
//     favoriteSingers: ["Aatif", "Sushant", "Udit"],
//     hobbies: [
//       {
//         name: "PubG",
//         frequency: 5,
//       },
//       {
//         name: "Singing",
//         frequency: 7,
//       },
//       {
//         name: "Bikes",
//         frequency: 2,
//       },
//     ],
//   },
// ]);

// ?find student whose favourite singer includes "arijit" and "shreya"
// db.students.find({
//   $and: [{ favouriteSingers: "Arijit" }, { favouriteSingers: "Shreya" }],
// });
// db.students.find({ favoriteSingers: { $all: ["Arijit", "Shreya"] } });

//? $size
// db.students.insertOne({
//   name: "Rina",
//   favoriteSingers: ["Neha", "Tony"],
//   hobbies: [
//     {
//       name: "Dancing",
//       frequency: 10,
//     },
//   ],
// });
//? find student who has two favourite singers
//! $size does not accept ragne of values such as $gt, $lt
// db.students.find({ favoriteSingers: { $size: 2 } });

//? find student who has three favourite singers
// db.students.find({ favoriteSingers: { $size: 3 } });

//? find student who has only one hobby
// db.students.find({ hobbies: { $size: 1 } });

//? elemMatch => use when single element's values are match

//? find student whose hobby is "pubg" and frequency is greater than 6
// db.students.find({
//   $and: [{ "hobbies.name": "PubG" }, { "hobbies.frequency": { $gt: 6 } }],
// });
// db.students.find({
//   hobbies: { $elemMatch: { name: "PubG", frequency: { $gt: 6 } } },
// });

// ? find students whose hobby is "Singing" and
// ? frequency is greater than or equals to 5
db.students.find({
  hobbies: { $elemMatch: { name: "Singing", frequency: { $gte: 5 } } },
});
