const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

/* App Routes */

router.get("/api/movies/", movieController.listMovies);

module.exports = router;
