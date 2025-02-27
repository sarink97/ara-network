import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import apiRoutes from "./routes/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// ✅ Middleware setup
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ CORS configuration
const allowedOrigins = [
  "http://162.244.30.39:3000",
  "http://162.244.30.39:3001",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins, // Allow all origins or specify e.g., "http://162.244.30.39:3000"
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
    credentials: true,
  })
);

app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));

// ✅ Mount API Routes
app.use("/api", apiRoutes);
app.use(express.static("public"));

// ✅ Test Root Route
app.get("/", (req, res) => {
  res.json({ status: "success", message: "Backend is running!" });
});

// ✅ Ensure root `/` and `/api/` work
app.get("/api", (req, res) => {
  res.json({ status: "success", message: "API root is working!" });
});

// ✅ Catch-All 404 Errors
app.use((req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

