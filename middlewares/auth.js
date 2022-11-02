const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { secretKey, unauthorizedErrorString } = require('../utils/constants');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new UnauthorizedError(unauthorizedErrorString));
    return;
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : secretKey);
  } catch (err) {
    next(new UnauthorizedError(unauthorizedErrorString));
    return;
  }

  req.user = payload;

  next();
};
