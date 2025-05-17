import {
  userGet,
  userPost,
  userUpdate,
  userDelete,
} from "../controllers/userController.js";
import {tokenExtractor} from '../utils/middleware.js'
import express from "express";

const router = express.Router();

router.get("/", userGet);
router.post("/", userPost);
router.put("/:id", tokenExtractor, userUpdate);
router.delete("/:id", tokenExtractor, userDelete);

export default router;
