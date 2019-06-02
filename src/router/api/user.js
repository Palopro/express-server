import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

router
  .route('/')
  .get(userController.getAllUsers);

router
  .route('/:id')
  .get(userController.getUserById);
  
module.exports = router;
