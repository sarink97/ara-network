import express from "express";
import {
  createSellerController,
  getAllSellersController,
  getSellerController,
  updateSellerController,
  deleteSellerController,
} from "../controllers/sellerController.js";

const router = express.Router();

router.post("/", createSellerController); // Create a new Seller
router.get("/", getAllSellersController); // Get all Sellers
router.get("/:id", getSellerController); // Get a specific Seller by ID
router.put("/:id", updateSellerController); // Update a Seller by ID
router.delete("/:id", deleteSellerController); // Delete a Seller by ID

export default router;
