import express from 'express';
import UserControllers from '../controllers'

const router = express.Router();

// GET
router.get('/', UserControllers.getAllUsers);
router.get('/me', UserControllers.getUserWithToken);
router.get('/:id', UserControllers.getUserById);

// POST
router.post('/', UserControllers.createNewUser);

// PUT
router.put('/:id', UserControllers.modifyUser);

// DELETE
router.delete('/:id', UserControllers.deleteUSer);

export default router;