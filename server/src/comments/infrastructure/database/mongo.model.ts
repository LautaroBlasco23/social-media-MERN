import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    text: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    listOfComments: {
        type: Array<String>,
        required: true
    }
});

export default mongoose.model('CommentModel', commentSchema);