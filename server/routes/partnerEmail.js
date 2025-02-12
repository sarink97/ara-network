// routes/partnerEmail.js
import express from "express";
import { sendEmail } from "../services/emailService.js";
import prisma from "../prisma/client.js";
import dotenv from "dotenv";

const router = express.Router();
dotenv.config();

router.post("/send-partnerEmail", async (req, res) => {
  try {
    console.log("Received request body:", req.body);

    const {
      name,
      email,
      phone,
      hearAboutUs,
      companyName,
      addressLine1,
      addressLine2,
      city,
      state,
      postalCode,
      country,
      website,
      interestedProducts,
      message,
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !companyName) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    // Store in database using Prisma
    console.log("Storing partner in database...");
    const storedPartner = await prisma.partner.create({
      data: {
        name,
        email,
        phone,
        hearAboutUs,
        companyName,
        addressLine1,
        addressLine2,
        city,
        state,
        postalCode,
        country,
        website,
        interestedProducts,
        message,
        status: "PENDING",
      },
    });
    console.log("Partner stored successfully:", storedPartner);

    // Format interested products for email
    const formattedProducts = Object.entries(interestedProducts)
      .filter(([_, value]) => value)
      .map(([key, _]) => {
        const formatted = key
          .replace(/([A-Z])/g, " $1")
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        return `- ${formatted}`;
      })
      .join("\n");

    // Send email
    console.log("Sending email notification...");
    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: `New Partner Application - ${companyName}`,
      text: `
New Partner Application Details:
------------------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Heard About Us: ${hearAboutUs}

Company Information:
------------------
Company Name: ${companyName}
Website: ${website || "Not provided"}
Address: ${addressLine1}
${addressLine2 ? `         ${addressLine2}` : ""}
City: ${city}
State/Province: ${state}
Postal Code: ${postalCode}
Country: ${country}

Interested Products:
-----------------
${formattedProducts || "None selected"}

Additional Message:
----------------
${message || "No message provided"}

Status: PENDING
Partner ID: ${storedPartner.id}
      `,
    });
    console.log("Email sent successfully");

    return res.status(200).json({
      success: true,
      message: "Partner application received and processed successfully",
      partnerId: storedPartner.id,
    });
  } catch (error) {
    console.error("Error processing partner application:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });

    // Handle unique email constraint violation
    if (error.code === "P2002" && error.meta?.target?.includes("email")) {
      return res.status(400).json({
        success: false,
        message: "This email is already registered as a partner.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to process partner application: " + error.message,
    });
  }
});

export default router;
