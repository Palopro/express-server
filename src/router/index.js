import express from 'express';
import userController from './userController';

const router = express.Router();

router
  .route('/user')
  .get(userController.getAllUsers)
  .post(userController.createUser);

module.exports = router;
