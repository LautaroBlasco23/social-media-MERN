import mongoose from 'mongoose';
import PostEntity from '../../entities/post.entity';
import PostModel from './mongo.model';
import 'dotenv/config';
import {v4 as uuid} from 'uuid';

class PostMongoControllers {

    private async connectWithEnv() {
        await mongoose.connect(process.env.MONGO_URI!);
    }

    public async getAllPosts(): Promise<Array<PostEntity> | null> {
        try {
            this.connectWithEnv()
            const listOfPosts: Array<PostEntity> = await PostModel.find({});
            return listOfPosts
        } catch (error) {
            if(process.env.env === 'development') console.log("mongo controller error: ", error)            
            return null
        }
    }

    public async getPostById(id:string): Promise<PostEntity | null> {
        try {
            this.connectWithEnv()
            const post: Array<PostEntity> = await PostModel.find({post_id: id});
            return post[0];
        } catch (error) {
            if(process.env.env === 'development') console.log("mongo controller error: ", error)
            return null
        }
    }

    public async createPost({text, user_id}: {text: string, user_id: string}) {
        try {
            this.connectWithEnv()
            const post_id = uuid();
            const likes = 0;
            const comments_ids: Array<string> = []
            const newPost = await PostModel.create({text, user_id, likes, comments_ids, post_id});
            return newPost.post_id;
        } catch (error) {
            if(process.env.env === 'development') console.log("mongo controller error: ", error)
            return null
        }
    }

    public async modifyPost(id: string, post: PostEntity) {

    }

    public async deletePost(id: string) {

    }
}

export default new PostMongoControllers();