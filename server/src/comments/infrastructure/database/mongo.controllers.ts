import CommentModel from './mongo.model';
import mongoose from 'mongoose';
import CommentEntity from '../../entities/comments.entity';
import { v4 as uuid } from 'uuid';

export default class CommentMongoControllers {
    private async connectWithEnv() {
        await mongoose.connect(process.env.MONGO_URI!);
    }

    public async getCommentsFromPost(postId: string) {
        this.connectWithEnv();
        const listOfComments: Array<CommentEntity> | null = await CommentModel.find({postId});
        return listOfComments;
    }
    
    public async getCommentById(commentId: string) {
        this.connectWithEnv();
        const comment: CommentEntity | null = await CommentModel.findOne({commentId});
        return comment;
    }

    public async createNewComment (text: string, postId: string, userId: string) {
        this.connectWithEnv();
        const newComment = await CommentModel.create({
            commentId: uuid(),
            text,
            postId,
            userId,
            likes: 0,
            listOfComments: []
        })
        return newComment.id;
    }
    public async modifyComment(commentId: string, comment: CommentEntity){
        const modifiedComment = await CommentModel.findOneAndUpdate({commentId},comment);
        return modifiedComment ? modifiedComment.id : null;
    }
    public async deleteComment(commentId: string){
        await CommentModel.findOneAndDelete({commentId});
        return commentId;
    }
}