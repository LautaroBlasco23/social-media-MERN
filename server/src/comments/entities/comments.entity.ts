export default interface CommentEntity {
    id: string
    text: string
    postId: string
    userId: string
    likes: number
    listOfComments: Array<string>
};