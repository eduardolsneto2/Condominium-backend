import express from "express";
import { Register, getPost } from "../controllers/posts.js";
import Validate from "../middleware/validate.js";
import { check } from "express-validator";

const router = express.Router();

// Register route -- POST request
router.post(
    "/newpost",
    check("title")
        .not()
        .isEmpty()
        .withMessage("title is required"),
    check("text")
        .not()
        .isEmpty()
        .withMessage("text is required"),
    check("type")
        .not()
        .isEmpty()
        .withMessage("the type is required"),
    Validate,
    Register
);

router.get("/getpost/:id", getPost)

export default router;