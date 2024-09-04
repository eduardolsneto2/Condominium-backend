import Post from "../models/Post.js";

export async function Register(req, res) {
    const { title, text, type } = req.body;
    try {
        const newUPost = new Post({
            title,
            text,
            type,
        });
        const savedPost = await newUPost.save(); // save new user into the database
        console.log(savedPost);
        // const { password,...user_data } = savedUser;
        res.status(200).json({
            status: "success",
            data: savedPost,
            message:
                "Post created.",
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            code: 500,
            data: [],
            message: "Internal Server Error",
        });
    }
    res.end();
}

export async function getPost(req, res) {

    const { title, text, type } = req.body;
    try {
        
        const posts = await Post.find({"type": req.params.id})
        res.status(200).json({
            status: "success",
            data: posts,
            message:
                "Post created.",
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            code: 500,
            data: [],
            message: "Internal Server Error",
        });
    }
    res.end();
}