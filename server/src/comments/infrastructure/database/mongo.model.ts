import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    id: String,
    text: String,
    postId: String,
    userId: String,
    likes: Number,
    listOfComments: Array<String>
});

export default mongoose.model('CommentModel', commentSchema);