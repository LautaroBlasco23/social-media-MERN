import {Request, Response} from 'express';
import CommentMongoControllers from '../database/mongo.controllers';

class CommentControllers {
    public getCommentsFromPost = async (req: Request, res: Response) => {
        try {
            const listOfComments = await CommentMongoControllers.getCommentsFromPost(req.params.id);
            if (listOfComments === null) throw Error('list of comments is null');
            res.status(200).json(listOfComments);
        } catch (error) {
            if(process.env.NODE_ENV === 'development') console.log(error);
            res.status(400).send('Unexpected error')
        }

    }

    getCommentById = async (req: Request, res: Response) => {
        try {
            const comment = await CommentMongoControllers.getCommentById(req.params.id);
            if (comment === null) throw Error('comment is null');
            res.status(200).json(comment);
        } catch (error) {
            if(process.env.NODE_ENV === 'development') console.log(error);
            res.status(400).send('Unexpected error')
        }
    }

    createNewComment = async (req: Request, res: Response) => {
        try {
            const {text, postId, userId} = req.body;
            const newCommentId: string | null = await CommentMongoControllers.createNewComment(text, postId, userId);
            if (newCommentId === null) throw Error('new comment is null');
            res.status(201).json(newCommentId)
        } catch (error) {
            if(process.env.NODE_ENV === 'development') console.log(error);
            res.status(400).send('Unexpected error');
        }
    }

    modifyComment = async (req: Request, res: Response) => {
        try {
            const modifiedCommentId: string | null = await CommentMongoControllers.modifyComment(req.params.id, req.body);
            if ( modifiedCommentId === null ) throw Error('modified comment is null');
            res.status(200).json(modifiedCommentId)  
        } catch (error) {
            if(process.env.NODE_ENV === 'development') console.log(error);
            res.status(400).send('Unexpected error');
        }
    }

    deleteComment = async (req: Request, res: Response) => {
        try {
            const deletedCommentId: string | null = await CommentMongoControllers.deleteComment(req.params.id);
            if ( deletedCommentId === null ) throw Error('deleted comment is null');
            res.status(200).json(deletedCommentId)  
        } catch (error) {
            if(process.env.NODE_ENV === 'development') console.log(error);
            res.status(400).send('Unexpected error');
        }
    }
}


export default new CommentControllers();