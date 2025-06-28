import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";

// Import Routes
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

// Config env
dotenv.config();

// Express app
const app = express();

// Resolve __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to DB
connectDB();

// Middlewares
app.use(
  cors({
    origin: "https://ataur-ecom.vercel.app", // ✅ Replace with your frontend domain
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

// API Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// ❌ Remove or comment this part if frontend is deployed separately
// app.use(express.static(path.join(__dirname, "../client/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// Run server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
