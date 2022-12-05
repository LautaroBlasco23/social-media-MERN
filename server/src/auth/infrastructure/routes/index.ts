import express from 'express';
import registerController from '../controllers/register';
import loginController from '../controllers/login';

const router = express.Router();

router.post('/login', loginController);
router.post('/register', registerController);

export default router;