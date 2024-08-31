import express from "express";
import { Register, getMessage } from "../controllers/chat.js";
import Validate from "../middleware/validate.js";
import { check } from "express-validator";

const router = express.Router();

// Register route -- POST request
router.post(
    "/newmessage",
    check("from")
        .not()
        .isEmpty()
        .withMessage("from is required"),
    check("text")
        .not()
        .isEmpty()
        .withMessage("text is required"),
    check("whoTo")
        .not()
        .isEmpty()
        .withMessage("destination is required"),
    Validate,
    Register
);

router.get("/getchat", getMessage)

export default router;