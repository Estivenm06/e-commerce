import {
  productGet,
  productGetOnlyOne,
  productCreate,
  productUpdate,
  productDelete,
} from "../controllers/productController.js";
import express from "express";

const router = express.Router();

router.get("/", productGet);
router.get("/:id", productGetOnlyOne);
router.post("/", productCreate);
router.put("/:id", productUpdate);
router.delete("/:id", productDelete);

export default router;
