use("Udemy");

// ?Add
//? insertOne, insertMany

// db.course.insertOne({
//   name: "MERN",
//   duration: 90,
//   price: 25000,
// });

// db.course.insertOne({
//   name: "Python",
//   duration: 90,
//   price: 20000,
// });

// db.course.insertOne({
//   name: "Django",
//   duration: 60,
//   price: 20000,
// });

// db.course.insertMany([
//   {
//     name: "Java",
//     duration: 120,
//     price: 40000,
//   },
//   {
//     name: "Cyber Security",
//     duration: 90,
//     price: 35000,
//   },
//   {
//     name: "UI/UX",
//     duration: 120,
//     price: 40000,
//   },
// ]);

// db.course.insertMany([
//   {
//     name: "Flutter",
//     duration: 60,
//     price: 15000,
//   },
//   {
//     name: "React",
//     duration: 90,
//     price: 22000,
//   },
// ]);

//? Read
// ?findOne, find
// db.course.findOne({ name: "Python" });
// db.course.findOne({ duration: 90 });
// db.course.findOne({ price: 20000 });

// db.course.find({ name: "Flutter" });
// db.course.find({ duration: 90 });

// ?delete
// ?deleteOne, deleteMany
// db.course.deleteOne({ price: 40000 });

// db.course.deleteMany({ name: "Python" });

// db.course.find();

// ?update
// ?updateOne, updateMany
// db.course.updateOne(
//   { name: "MERN" },
//   {
//     $set: {
//       price: 22000,
//     },
//   }
// );

// db.course.updateMany(
//   { price: 40000 },
//   {
//     $set: {
//       price: 35000,
//       duration: 90,
//     },
//   }
// );

// db.course.updateOne(
//   { duration: 105 },
//   {
//     $set: {
//       duration: 90,
//       price: 35000,
//     },
//   }
// );
db.course.find({ price: 35000 });
