import express from 'express';
import PostControllers from '../controllers';
const router = express.Router();

router.get('/', PostControllers.getAllPosts);
router.get('/:id', PostControllers.getPostById);

router.post('/', PostControllers.createPost);

router.put('')

router.delete('')

export default router;