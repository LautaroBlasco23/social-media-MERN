import PostEntity from "./post.entity";

export default interface PostRepository {
    getAllPosts: () => Array<PostEntity>;
    getPostById: (id: string) => PostEntity;
    createPost: (post: PostEntity) => string;
    modifyPost: (id: string, post: PostEntity) => PostEntity;
    deletePost: (id: string) => string;
};