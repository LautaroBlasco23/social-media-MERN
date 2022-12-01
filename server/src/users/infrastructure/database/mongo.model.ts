import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required:true,
        unique: true
    },
    username: {
        type: String,
        required:true
    },
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required:true
    },
    age: {
        type: Number,
        required:true
    },
})

export default mongoose.model('UserModel', userSchema);