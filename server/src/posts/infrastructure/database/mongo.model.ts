import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    post_id:  {
        type: String,
        required: true
    },
    comments_ids:  {
        type: Array<String>,
        required: true
    },
    text:  {
        type: String,
        required: true
    },
    likes:  {
        type: Number,
        required: true
    },
})

export default mongoose.model('PostModel', postSchema);