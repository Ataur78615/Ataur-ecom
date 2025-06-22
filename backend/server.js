import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

// Configure environment
dotenv.config();

// App
const app = express();

// __dirname setup for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect MongoDB
connectDB();

// Middlewares
app.use(cors({
  origin: "https://ataur-ecom-1.onrender.com", // ✅ Your frontend domain
  credentials: true
}));
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Static files (for deployment)
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Server listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
