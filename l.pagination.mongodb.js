use("imdb");

//? Pagination

//? skip = (page-1)*limit

let page = 2;
const limit = 10;

let skip = (page - 1) * limit;
let searchText = "G";

db.movies.aggregate([
  {
    $match: {
      name: { $regex: searchText },
    },
  },
  { $skip: skip },
  { $limit: limit },
  {
    $project: {
      name: 1,
      _id: 0,
      id: 1,
    },
  },
]);
