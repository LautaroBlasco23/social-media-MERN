import CommentEntity from "./comments.entity";

export default interface CommentsRepository {
    getCommentsFromPost: (postId: string) => Array<CommentEntity>
    getCommentById: (commentId: string) => CommentEntity
    createNewComment: (comment: CommentEntity) => string // Comment id
    modifyComment: (commentId: string, comment: CommentEntity) => string // Comment id
    deleteComment: (commentId: string) => string // Comment id
};