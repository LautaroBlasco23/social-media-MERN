import PostMongoController from '../database/mongo.controller';
import {Request, Response} from 'express';

class PostControllers {
    public getAllPosts = async (req: Request, res: Response) => {
        const listOfPosts = await PostMongoController.getAllPosts();
        res.json(listOfPosts);
    }

    public getPostById = async (req: Request, res: Response) => {
        const post = await PostMongoController.getPostById(req.params.id);
        res.json(post);
    }

    public createPost = async (req: Request, res: Response) => {
        // the user id should be obtained from a token. It will be implemented in the near future
        const {text, user_id} = req.body;
        const newPost = await PostMongoController.createPost({text, user_id});
        res.json(newPost)
    }
}

export default new PostControllers();