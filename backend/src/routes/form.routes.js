import express from "express";
const router = express.Router();
router.post("/", async (req, res) => {
  try {
        res.json({ message: "Form submitted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/", async (req, res) => {
  try {
    res.json([]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
export default router;
