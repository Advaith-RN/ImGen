import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name: {type: String},
    prompt: {type: String, required: true},
    photoUrl: {type: String, required: true},
});

const PostSchema = mongoose.model("Post", Post);

export default PostSchema;