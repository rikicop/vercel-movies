require("../models/db");
const Movie = require("../models/movie");

/* /api/movies/ */
/* GET All Movies */

exports.listMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.json(movies);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
