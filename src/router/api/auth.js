import express from 'express';
import authController from '../controllers/authController';

const router = express.Router();

router
  .route('/signup')
  .post(authController.signUpUser);

router
  .route('/signin')
  .post(authController.signInUser);

module.exports = router;
