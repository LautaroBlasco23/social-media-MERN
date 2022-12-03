import PostEntity from "./post.entity"

export default class PostValue {
    user_id: string
    post_id: string
    text: string
    likes: number
    comments_ids: Array<string>

    constructor({user_id, post_id, text, likes, comments_ids} : PostEntity){
        this.user_id = user_id;
        this.post_id = post_id;
        this.text = text;
        this.likes = likes;
        this.comments_ids = comments_ids;
    }
}