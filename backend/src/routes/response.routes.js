import express from "express";
import ResponseModel from "../models/response.js";
import axios from "axios";

const router = express.Router();

router.post("/responses", async (req, res) => {
  try {
    const saved = await ResponseModel.create(req.body);
    res.json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
