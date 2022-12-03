import PostRepository from "../entities/post.repository";
import PostEntity from "../entities/post.entity";
import PostValue from "../entities/post.value";

export default class PostUseCases {
    constructor(private readonly postRepository: PostRepository){}

    public getAllPosts() {
        const listOfPosts = this.postRepository.getAllPosts();
        return listOfPosts;
    }

    public getPostById(id: string) {
        const post = this.postRepository.getPostById(id);
        return post;
    }

    public createPost(text: string, user_id: string) {
        const post_id:string = "id" + Math.random().toString(16).slice(2)
        const likes: number = 0;
        const comments_ids: string[] = []
        
        const newPost = this.postRepository.createPost({user_id, post_id, text, likes, comments_ids});
        return newPost;
    }

    public modifyPost(id: string, post: PostEntity) {
        const modifiedPost = this.postRepository.modifyPost(id, post);
        return modifiedPost;
    }

    public deletePost(id: string) {
        const deletedPost = this.postRepository.deletePost(id) 
        return deletedPost;
    }
}