use("imdb");

//? aggregate =>query tool, is read operation, no changes in data

//? pipeline Stage

//? $match
//? $limit
//? $skip
//? $project
//? $group
//? $unwind
//? $lookup

//? $match => it is a filter stage, similar to read operator

//? project => select field

//? $sort => sort documents based upon values and fields that are provided
// for ascending order 1 => small to big,
// for descending order -1 => big to small

//? arrayElemAt => to find middle elements from multiple array values

// db.movies.find().count();

db.movies.aggregate([
  {
    $match: { "rating.average": { $gte: 8 } },
  },
  {
    $project: {
      name: 1,
      schedule: 1,
      avgRating: "$rating.average",
      scheduleDay: { $first: "$schedule.days" },
      genres: 1,
      lastGenres: { $last: "$genres" },
      secondGenres: { $arrayElemAt: ["$genres", 1] },
    },
  },
  {
    $sort: {
      avgRating: -1,
    },
  },
]);
