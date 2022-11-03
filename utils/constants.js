const dbServerAddress = 'mongodb://localhost:27017/moviesdb';
const secretKey = 'dev-secret';
const notFoundString = 'Страница не найдена';
const wrongEmailOrPasswordString = 'Неправильные почта или пароль';
const wrongUrl = 'Передан неверный url';
const unauthorizedErrorString = 'Необходима авторизация';
const serverErrorMessage = 'На сервере произошла ошибка';
const rateLimitMessage = 'Too many request from this IP';
const wrongUserData = 'Переданы некорректные данные при создании пользователя';
const emailIsUsedError = 'Данный email уже используется';
const userNotFound = 'Пользователь не найден';
const wrongUpdateUserData = 'Переданы некорректные данные при обновлении информации';
const wrongData = 'Переданы некорректные данные';
const wrongMovieData = 'Переданы некорректные данные при создании фильма';
const movieNotFound = 'Фильм с указанным _id не найден';
const movieDeleteError = 'Нельзя удалить чужой фильм';

module.exports = {
  dbServerAddress,
  secretKey,
  notFoundString,
  wrongEmailOrPasswordString,
  wrongUrl,
  unauthorizedErrorString,
  serverErrorMessage,
  rateLimitMessage,
  wrongUserData,
  emailIsUsedError,
  userNotFound,
  wrongUpdateUserData,
  wrongData,
  wrongMovieData,
  movieNotFound,
  movieDeleteError,
};
