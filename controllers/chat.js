import Chat from "../models/Chat.js";

export async function Register(req, res) {
    const { text, from, whoTo } = req.body;
    try {
        const newChat = new Chat({
            text,
            from,
            whoTo,
        });
        const savedChat = await newChat.save(); // save new user into the database
        console.log(savedChat);
        // const { password,...user_data } = savedUser;
        res.status(200).json({
            status: "success",
            data: savedChat,
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

export async function getMessage(req, res) {
    try {
        
        const messages = await Chat.find()
        res.status(200).json({
            status: "success",
            data: messages,
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