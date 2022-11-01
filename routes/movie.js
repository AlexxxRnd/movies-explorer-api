const movieRouter = require('express').Router();
const auth = require('../middlewares/auth');

const {
  createMovieValidation,
  movieValidation,
} = require('../middlewares/validation');

const {
  getMovies,
  deleteMovie,
  createMovie,
} = require('../controllers/movie');

movieRouter.use(auth);
movieRouter.get('/movies', getMovies);
movieRouter.delete('/movies/:movieId', movieValidation, deleteMovie);
movieRouter.post('/movies', createMovieValidation, createMovie);

module.exports = movieRouter;
