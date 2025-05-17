import {
  userGet,
  userPost,
  userUpdate,
  userDelete,
} from "../controllers/userController.js";
import express from "express";

const router = express.Router();

router.get("/", userGet);
router.post("/", userPost);
router.put("/:id", userUpdate);
router.delete("/:id", userDelete);

export default router;
