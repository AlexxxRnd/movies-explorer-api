const { celebrate, Joi } = require('celebrate');

const validator = require('validator');
const BadRequestError = require('../errors/BadRequestError');
const { wrongUrl } = require('../utils/constants');

const signIn = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const signUp = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const updateUserInfoValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

const createMovieValidation = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().custom((value) => {
      if (!validator.isURL(value)) {
        throw new BadRequestError(wrongUrl);
      }
      return value;
    }),
    trailerLink: Joi.string().required().custom((value) => {
      if (!validator.isURL(value)) {
        throw new BadRequestError(wrongUrl);
      }
      return value;
    }),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().required().custom((value) => {
      if (!validator.isURL(value)) {
        throw new BadRequestError(wrongUrl);
      }
      return value;
    }),
    movieId: Joi.number().required(),
  }),
});

const movieValidation = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().length(24).hex(),
  }),
});

module.exports = {
  signUp,
  signIn,
  createMovieValidation,
  movieValidation,
  updateUserInfoValidation,
};
