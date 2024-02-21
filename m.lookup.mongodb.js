use("relation");

// db.owners.insertMany([
//   { name: "Kamal", address: "Surkhet" },
//   { name: "Laxman", address: "Lalitpur" },
//   { name: "Arun", address: "Tripureshwor" },
// ]);

// db.owners.find();

// db.vehicles.insertOne({
//   name: "FZ",
//   brand: "Yamaha",
//   cc: 250,
//   color: "blue",
//   ownerId: ObjectId("65d5a4e3b364755dc0ff7ec3"),
// });

//? $lookup

// db.vehicles.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $lookup: {
//       from: "owners",
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownersDetails",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       brand: 1,
//       color: 1,
//       cc: 1,
//       ownerName: { $first: "$ownersDetails.name" },
//     },
//   },
// ]);

//? example 2

// db.courses.insertMany([
//   {
//     name: "MERN",
//     duration: 90,
//   },
//   {
//     name: "Python",
//     duration: 45,
//   },

//   {
//     name: "Devops",
//     duration: 65,
//   },

//   {
//     name: "AI",
//     duration: 90,
//   },
//   {
//     name: "Flutter",
//     duration: 55,
//   },
// ]);

// db.students.insertOne({
//   name: "Rina",
//   address: "Kalanki",
//   email: "rina@gmail.com",
//   enrolledCourseIds: [
//     ObjectId("65d5ab296622e67a5a158fbb"),
//     ObjectId("65d5ab296622e67a5a158fbc"),
//   ],
// });

// db.students.insertOne({
//   name: "Sumitra",
//   address: "Tinkune",
//   email: "sumitra@gmail.com",
//   enrolledCourseIds: [
//     ObjectId("65d5ab296622e67a5a158fbd"),
//     ObjectId("65d5ab296622e67a5a158fbe"),
//   ],
// });

db.students.aggregate([
  {
    $match: {},
  },
  {
    $lookup: {
      from: "courses",
      localField: "enrolledCourseIds",
      foreignField: "_id",
      as: "courseDetails",
    },
  },
  {
    $project: {
      name: 1,
      address: 1,
      email: 1,
      "courseDetails.name": 1,
      "courseDetails.duration": 1,
    },
  },
]);
