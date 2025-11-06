import express from "express";
import db from "../db.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  const sql = "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error("Database insert error:", err);
      return res.status(500).json({ success: false, message: "Database error" });
    }
    res.status(200).json({ success: true, message: "Saved to database" });
  });
});

export default router;
