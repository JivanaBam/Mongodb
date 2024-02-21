use("imdb");

//? $, $[], $[identifier]

//? $ => to update single item of a field

//db.friends.updateOne(
//   { name: "Jibana" },
//   {
//     $set: {
//       scores: { sub: "Science" },
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Suvechchha", "scores.sub": "Science" },
//   {
//     $set: {
//       "scores.$.sub": "MERN",
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Laxman", "scores.point": 65 },
//   {
//     $set: {
//       "scores.$.sub": "Math",
//       "scores.$.point": 70,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $addToSet: {
//       scores: {
//         $each: [
//           { sub: "Math", point: 66 },
//           { sub: "Nepali", point: 55 },
//           { sub: "Social", point: 77 },
//         ],
//       },
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Prithivi", "scores.sub": "Political Science" },
//   {
//     $inc: {
//       "scores.$.point": -10,
//     },
//   }
// );

//? update "Cycling" to "Rafting"

// db.friends.updateOne(
//   { name: "Jibana", hobbies: "Cycling" },
//   {
//     $set: {
//       "hobbies.$": "Rafting",
//     },
//   }
// );

// db.friends.update(
//   { name: "Prithivi" },
//   {
//     $addToSet: {
//       scores: {
//         $each: [
//           {
//             sub: "MERN",
//             point: 67,
//             Semester: "Second",
//           },
//           {
//             sub: "Python",
//             point: 78,
//             semester: "Third",
//           },
//         ],
//       },
//     },
//   }
// );

//? $[] => to update many items

//? decrease all subject of "Jibana" by 10 point
// db.friends.updateOne(
//   { name: "Jibana" },
//   {
//     $inc: {
//       "scores.$[].sub": -10,
//     },
//   }
// );

//! to update two or more values from multiple values

//? $[identifier] => update nested array values
// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $set: {
//       "scores.$[item].point": 70,
//     },
//   },
//   {
//     arrayFilters: [{ "item.point": { $gte: 66 } }],
//   }
// );

// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $set: {
//       "hobbies.$[item]": { $each: ["Cycling", "Driving"] },
//     },
//   },
//   {
//     arrayFilters: [{ item: "Swimming", item: "Singing" }],
//   }
// );

// db.friends.updateOne(
//   { name: "Jibana" },
//   {
//     $set: {
//       "hobbies.$[item]": "Travelling",
//     },
//   },
//   {
//     arrayFilters: [{ item: "Gaming" }],
//   }
// );

// db.friends.updateOne(
//   { name: "Jibana" },
//   {
//     $push: {
//       hobbies: { $each: ["Reading", "Coding", "Gaming", "Music"] },
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Jibana" },
//   {
//     $set: {
//       "hobbies.$[item]": "Walking",
//     },
//   },
//   {
//     arrayFilters: [{ item: "Dancing" }],
//   }
// );

// db.friends.updateOne(
//   { name: "Laxman", "scores.sub": "Math" },
//   {
//     $set: {
//       "scores.$.sub": "English",
//       "scores.$.point": 75,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Laxman", "scores.sub": "English" },
//   {
//     $set: {
//       "scores.$.sub": "Science",
//     },
//   }
// );

//? pop 2 times to remove nested array
db.friends.updateOne(
  { name: "Prithivi" },
  {
    $pop: {
      scores: -1,
    },
  }
);

db.friends.find();
