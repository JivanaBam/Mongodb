// use("broadway"); //database

// ?CRUD
//? Creat => Add
//? insertOne, insertMany

//? insertOne
// db.course.insertOne({
//   name: "java",
//   duration: 90,
//   price: 25000,
// });

// db.course.find();

// db.student.insertOne({
//   name: "Jiana",
//   course: "MERN",
//   age: 21,
// });

// db.student.find();

use("Daraz");

// db.product.insertOne({
//   name: "Bottle",
//   brand: "Serve Well",
//   price: 1200,
// });

// db.product.insertOne({
//   name: "noodle",
//   brand: "wai wai",
//   price: 25,
// });

// db.product.insertOne({
//   name: "Rice Cooker",
//   brand: "Samsung",
//   price: 2000,
// });

//?insertMany

// db.product.insertMany([
//   { name: "Shampoo", brand: "Sunsilk", price: 700 },
//   { name: "Hair Oil", brand: "Dabur Amala", price: 500 },
// ]);

// db.product.find();

// db.customer.insertOne({
//   name: "Jibana",
//   address: "Patan",
//   gmail: "jibana@gmail.com",
// });

// db.customer.find();

//? Read operation => find

//? findOne ,find

// ?findOne=> returns first item that matches the condition
// db.product.findOne({ name: "noodle" });
// db.product.findOne({ brand: "wai wai" });

//? find => to find many
// db.product.find({ name: "Shampoo" });

//? deleteOne
// db.product.deleteOne({ name: "Shampoo" });
// db.product.find();

// ?deleteMany
// db.product.deleteMany({ price: 1200 });
// db.product.find();

//? update
//? updateOne, updateMany

// db.product.updateOne(
//   { name: "Hair Oil" },
//   {
//     $set: {
//       price: 800,
//       brand: "Patanjali",
//     },
//   }
// );

// db.product.find();

// db.product.insertOne({
//   name: "Hair Oil",
//   brand: "ecoSathi",
//   price: 1500,
// });

// db.product.updateMany(
//   { name: "Hair Oil" },
//   {
//     $set: { price: 1500 },
//   }
// );
db.product.find();
