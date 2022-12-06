import express from 'express';
import CommentControllers from '../controllers';

const router = express.Router();

// GET
router.get('/post/:id', CommentControllers.getCommentsFromPost);
router.get('/:id', CommentControllers.getCommentById);

// POST
router.post('/', CommentControllers.createNewComment);

// PUT
router.put('/:id', CommentControllers.modifyComment);

// DELETE
router.delete('/:id', CommentControllers.deleteComment);

export default router;