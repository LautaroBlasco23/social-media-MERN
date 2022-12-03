export default interface PostEntity {
    user_id: string
    post_id: string
    comments_ids: Array<string>
    text: string
    likes: number
};