import Post from "../models/Post.js";

/**
 * @route POST v1/auth/register
 * @desc Registers a user
 * @access Public
 */
export async function Register(req, res) {
    // get required variables from request body
    // using es6 object destructing
    const { title, text, type } = req.body;
    try {
        // create an instance of a user
        const newUPost = new Post({
            title,
            text,
            type,
        });
        // Check if user already exists
        // const existingPost = await Post.findOne({ text });
        // if (existingPost)
        //     return res.status(400).json({
        //         status: "failed",
        //         data: [],
        //         message: "It seems you already have an account, please log in instead.",
        //     });
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