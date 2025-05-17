import { tokenExtractor } from "../utils/middleware.js";
import { logoutUser } from "../controllers/logoutController.js";
import express from "express";

const router = express.Router();

router.post("/", tokenExtractor, logoutUser);

export default router;
