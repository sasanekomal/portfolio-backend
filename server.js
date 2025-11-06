import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";



dotenv.config(); // ✅ Load environment variables

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "https://your-frontend-name.netlify.app"], // ✅ replace with your Netlify URL later
  methods: ["GET", "POST"],
}));

app.use(express.json());

// ✅ Use routes
app.use("portfolio-backend-production-c4a0.up.railway.app", contactRoutes);

app.get("/", (req, res) => {
  res.send("✅ Portfolio backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
