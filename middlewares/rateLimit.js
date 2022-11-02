const rateLimit = require('express-rate-limit');
const { rateLimitMessage } = require('../utils/constants');

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: rateLimitMessage,
});

module.exports = {
  limiter,
};
