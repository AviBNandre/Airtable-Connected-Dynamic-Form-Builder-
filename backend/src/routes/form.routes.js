// src/routes/form.routes.js
import express from "express";
const router = express.Router();

// Example: create a form
router.post("/", async (req, res) => {
  try {
    // Your logic to save form to MongoDB / Airtable
    res.json({ message: "Form submitted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Example: get forms
router.get("/", async (req, res) => {
  try {
    // Your logic to fetch forms from MongoDB
    res.json([]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
