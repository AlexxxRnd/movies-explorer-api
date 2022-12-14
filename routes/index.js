const router = require('express').Router();
const userRoute = require('./user');
const movieRoute = require('./movie');
const {
  signIn,
  signUp,
} = require('../middlewares/validation');

const { notFoundString } = require('../utils/constants');

const {
  createUser,
  login,
} = require('../controllers/user');

const NotFoundError = require('../errors/NotFoundError');

router.post('/signin', signIn, login);
router.post('/signup', signUp, createUser);
router.use(userRoute);
router.use(movieRoute);
router.use('*', (req, res, next) => {
  next(new NotFoundError(notFoundString));
});

module.exports = router;
