import CommentEntity from "../entities/comments.entity";
import CommentsRepository from "../entities/comments.repository";
import CommentValue from "../entities/comments.value";

export default class commentsUseCases {
    constructor(private readonly commentsRepo: CommentsRepository){}

    public getCommentsFromPost(postId: string){
        const listOfComments = this.commentsRepo.getCommentsFromPost(postId);
        return listOfComments;
    }


    public getCommentById(commentId: string){
        const comment = this.commentsRepo.getCommentById(commentId);
        return comment;
    }
    
    
    public createNewComment(text: string, postId: string, userId: string){
        const newComment = new CommentValue(text, postId, userId)
        const newCommentId = this.commentsRepo.createNewComment(newComment);
        return newCommentId;
    }
    
    
    public modifyComment(commentId: string, comment: CommentEntity){
        this.commentsRepo.modifyComment(commentId, comment);
        return commentId;
    }
    
    
    public deleteComment(commentId: string){
        this.commentsRepo.deleteComment(commentId);
        return commentId;
    }
}