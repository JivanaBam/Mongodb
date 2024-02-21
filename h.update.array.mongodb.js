use("imdb");

//? array update operators
//? $push, $addToSet, $pop, $pull, $pullAll

//? $push => add new data to end of array

// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $push: {
//       hobbies: "Dancing",
//     },
//   }
// );

//? push "Singing" and "Riding" to "Laxman's" hobbies
// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $push: {
//       hobbies: ["Singing", "Riding"],
//     },
//   }
// );

//! $push le array vitra arko array banaye value add garxa BUT
//! $each le existing array ma one by one value add garxa

//? $each => is called a modifier

// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $push: {
//       hobbies: { $each: ["Singing", "Riding"] },
//     },
//   }
// );

// db.friends.updateOne({ name: "Laxman" }, { $push: { hobbies: "Cardio" } });

//? $addToSet => value already xa vane add gardaina but xaina vane chai new value add garxa
// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $addToSet: {
//       hobbies: "Cycling",
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $addToSet: {
//       hobbies: { $each: ["riding", "Book"] },
//     },
//   }
// );

//? add  Hiking and Cricket to hobbies of "Prithivi"
// db.friends.updateOne(
//   { name: "Prithivi" },
//   {
//     $addToSet: {
//       hobbies: { $each: ["Hiking", "Cricket"] },
//     },
//   }
// );
//? add cycling and Driving to Jibana's hobbies
// db.friends.updateOne(
//   { name: "Jibana" },
//   {
//     $addToSet: {
//       hobbies: { $each: ["Cycling", "Driving"] },
//     },
//   }
// );

//? add sub:English and point 61 to Suvechchha's score
// db.friends.updateOne(
//   { name: "Suvechchha" },
//   {
//     addToSet: {
//       scores: { sub: "English", point: 61 },
//     },
//   }
// );

//? $pop => remove item according to given position like
//? 1 from end, -1 from start

// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $pop: {
//       hobbies: 1,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $pop: {
//       hobbies: -1,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Suvechchha" },
//   {
//     $pop: {
//       scores: 1,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Suvechchha" },
//   {
//     $pop: {
//       scores: -1,
//     },
//   }
// );

//? remove last item and first item from jibana's scores

//? $pull
//? remove item based upon condition

//? remove scores from suvechchha whose point is greater than 60
// db.friends.updateOne(
//   { name: "Suvechchha" },
//   {
//     $pull: {
//       scores: { point: { $gt: 60 } },
//     },
//   }
// );
//? remove "Cycling" laxman's hobbies
// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $pull: {
//       hobbies: { $eq: "Cycling" },
//     },
//   }
// );

//?! remove "Cricket" and "Basketball" from prithivi's hobbies
// db.friends.updateOne(
//   { name: "Prithivi" },
//   {
//     $pull: {
//       hobbies: { $in: ["Cricket", "Basketball"] },
//     },
//   }
// );

//? pullAll => removes all matching values from array
//? condition like $gt, $eq doesnot work here

// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $pullAll: {
//       hobbies: ["Dancing", "Riding", "Cardio"],
//     },
//   }
// );
// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $pullAll: {
//       scores: [
//         {
//           sub: "Math",
//           point: 50,
//         },
//       ],
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Prithivi" },
//   {
//     $pullAll: {
//       scores: [
//         {
//           sub: "Science",
//           point: 55,
//         },
//         {
//           sub: "Social",
//           point: 55,
//         },
//       ],
//     },
//   }
// );

db.friends.find();
