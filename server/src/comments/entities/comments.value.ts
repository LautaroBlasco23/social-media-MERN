export default class CommentValue {
    id: string
    text: string
    postId: string
    userId: string
    likes: number
    listOfComments: Array<string>
    
    constructor(text: string, postId: string, userId: string){
        this.id = Math.floor((1 + Math.random()) * 0x10000).toString(16);
        this.text = text;
        this.postId = postId;
        this.userId = userId;
        this.likes = 0;
        this.listOfComments = []
    }
}