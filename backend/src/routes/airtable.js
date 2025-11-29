import express from "express";
const router = express.Router();

// Example route
router.get("/fields", (req, res) => {
  res.json([{ id: "fld1", name: "Name" }, { id: "fld2", name: "Email" }]);
});

export default router;
