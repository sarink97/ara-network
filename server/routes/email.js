import express from "express";
import { sendEmail } from "../services/emailService.js";
import { messageRepository } from "../repositories/message-repo.js";
import dotenv from "dotenv";

const router = express.Router();
dotenv.config();

router.post("/send-email", async (req, res) => {
  try {
    console.log("Received request body:", req.body); // Log incoming request

    const { name, email, subject, message } = req.body;

    // Log before database operation
    console.log("Attempting to create message in database...");

    // Store message in database
    await messageRepository.createMessage({
      name,
      email,
      message,
      subject,
    });

    console.log("Message stored in database successfully");

    // Log before email sending
    console.log("Attempting to send email...");

    // Send email to admin
    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
            `,
    });

    console.log("Email sent successfully");

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    // More detailed error logging
    console.error("Detailed error in send-email route:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });

    return res.status(500).json({
      success: false,
      message: "Failed to send email: " + error.message,
    });
  }
});

export default router;
