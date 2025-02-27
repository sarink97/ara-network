import express from "express";
import prisma from "../prisma/client.js"; // Ensure Prisma is imported

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const partners = await prisma.partner.findMany(); // ✅ Use "partner"
    res.json(partners);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ status: "fail", message: "Database error" });
  }
});

export default router;

