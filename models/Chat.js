import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: "text is required",
        },
        from: {
            type: String,
            required: "from is required",
        },
        whoTo: {
            type: String,
            required: "destination is required"
        }
    },
    { timestamps: true }
);

export default mongoose.model("chats", ChatSchema);