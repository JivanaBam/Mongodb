use("imdb");

// ?update=> edit values in document

// ? $set => to edit/update elements

//? update name from "Alish" to "Laxman"
// db.friends.updateOne({ name: "Alish" }, { $set: { name: "Laxman" } });
//? update name from "Unique" to "Jibana" and age to 21 and contact number to "985476321"
// db.friends.updateOne(
//   { name: "Unique" },
//   {
//     $set: {
//       name: "Jibana",
//       age: 21,
//       contactNumber: "985476321",
//     },
//   }
// );

//? update name from "Prakash" to "Prithivi", age to 22 and contactNumber to "982434336"
// db.friends.updateOne(
//   { _id: ObjectId("659fbbac8e46b28b92d7033c") },
//   {
//     $set: {
//       name: "Prithivi",
//       age: 22,
//       contactNumber: "9824327462",
//     },
//   }
// );
//? update name from "Nischal" to "Suvechchha", age to 20 and contactNmber to "9823543567" and also isNepali to true
// db.friends.updateOne(
//   { _id: ObjectId("656070d2b16daaa31169a51c") },
//   {
//     $set: {
//       name: "Suvechchha",
//       age: 20,
//       contactNumber: "9823543567",
//       isNepali: true,
//     },
//   }
// );

//? $inc => increases decreases value by given number
//? update age if "Jibana" by 40
// db.friends.updateOne(
//   { name: "Jibana" },
//   {
//     $inc: {
//       age: 40,
//     },
//   }
// );

//? decrease age if "Jibana" by 45
// db.friends.updateOne(
//   { name: "Jibana" },
//   {
//     $inc: {
//       age: -45,
//     },
//   }
// );

//? increase age for all friends by 10
// db.friends.updateMany(
//   {},
//   {
//     $inc: {
//       age: 10,
//     },
//   }
// );

//? mul => multiplies field by provided value
//? age * 2
// db.friends.updateOne(
//   { name: "Suvechchha" },
//   {
//     $mul: {
//       age: 2,
//     },
//   }
// );

//? divide age of "Prithivi" by 2
// db.friends.updateOne(
//   { name: "Prithivi" },
//   {
//     $mul: {
//       age: 0.5,
//     },
//   }
// );
db.friends.find();
