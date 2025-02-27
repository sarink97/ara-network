import express from "express";
import {
  createSellerController,
  getAllSellersController,
  getSellerController,
  updateSellerController,
  deleteSellerController,
} from "../controllers/sellerController.js";
import prisma from "../prisma/client.js"; // Ensure Prisma is imported

const router = express.Router();

// ✅ Check if `/api/sellers/` works
// router.get("/", (req, res) => {
//   res.json({ status: "success", message: "Sellers API is working!" });
// });
router.get("/", async (req, res) => {
  try {
    const sellers = await prisma.seller.findMany({
      include: {
        phones: true, // << important
      },
    }); // ✅ Use "partner"
    res.json(sellers);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ status: "fail", message: "Database error" });
  }
});

// ✅ Other CRUD operations
router.post("/", createSellerController); // Create a new Seller
router.get("/:id", getSellerController); // Get a specific Seller by ID
router.put("/:id", updateSellerController); // Update a Seller by ID
router.delete("/:id", deleteSellerController); // Delete a Seller by ID

export default router;

