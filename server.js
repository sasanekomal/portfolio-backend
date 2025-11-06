import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config(); // Load environment variables

const app = express();

// ✅ CORS configuration
const corsOptions = {
  origin: [
    "http://localhost:5173", // local dev
    "https://komalsasane-portfolio.netlify.app", // Netlify
    "https://www.komalsasane-portfolio.netlify.app" 
  ],
  methods: ["GET", "POST", "OPTIONS"], 
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options("*", cors(corsOptions));

app.use(express.json());

// Use routes
app.use("/api/contacts", contactRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("✅ Portfolio backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
