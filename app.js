require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const routes = require('./routes');
const { limiter } = require('./middlewares/rateLimit');
const cors = require('./middlewares/cors');
const serverError = require('./middlewares/serverError');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { dbServerAddress } = require('./utils/constants');

const { NODE_ENV, DB_CONNECTION_STRING, PORT = 3000 } = process.env;
const app = express();

mongoose.connect(NODE_ENV === 'production' ? DB_CONNECTION_STRING : dbServerAddress, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(helmet());
app.use(express.json());
app.use(requestLogger);
app.use(limiter);
app.use(cors);
app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(serverError);
app.listen(PORT);
