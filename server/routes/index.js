import express from "express";
import sellerRoutes from "./sellerRouter.js";

const router = express.Router();

// Root API check
router.get("/", (req, res) => {
    res.json({ status: "success", message: "API root is working!" });
});

// Example route (Ensure other files exist)
import blogRouter from "./blog.js";
import messageRouter from "./message.js";
import authRouter from "./auth.js";
import partnerRoutes from "./partnerRouter.js";
router.use("/partners", partnerRoutes);


router.use("/sellers", sellerRoutes);

router.use("/blog", blogRouter);
router.use("/messages", messageRouter);
router.use("/auth", authRouter);

export default router;

