import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: "title is required",
            max: 25,
        },
        text: {
            type: String,
            required: "text is required",
            unique: true
        },
        type: {
            type: String,
            required: "type is required",
            lowercase: true,
            trim: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("posts", PostSchema);