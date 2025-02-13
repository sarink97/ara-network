import express from "express";
import {
  createPartnerController,
  getAllPartnersController,
  getPartnerController,
  updatePartnerStatusController,
  deletePartnerController,
} from "../controllers/partnerController.js";

const router = express.Router();

router.post("/", createPartnerController);
router.get("/", getAllPartnersController);
router.get("/:id", getPartnerController);
router.patch("/:id/status", updatePartnerStatusController);
router.delete("/:id", deletePartnerController);

export default router;
