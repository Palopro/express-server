import express from 'express';
import authApi from './api/auth';
import userApi from './api/user';

const router = express.Router();

router.use('/auth', authApi);
router.use('/user', userApi);

module.exports = router;
