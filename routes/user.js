const userRouter = require('express').Router();
const auth = require('../middlewares/auth');

const {
  updateUserInfoValidation,
} = require('../middlewares/validation');

const {
  getCurrentUser,
  updateProfile,
} = require('../controllers/user');

userRouter.use(auth);
userRouter.get('/users/me', getCurrentUser);
userRouter.patch('/users/me', updateUserInfoValidation, updateProfile);

module.exports = userRouter;
