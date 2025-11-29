import express from "express";
import axios from "axios";
import ResponseModel from "../models/response.js";
const router = express.Router();
router.post("/airtable/webhook/create", async (req, res) => {
  try {
    const result = await axios.post(
      `https://api.airtable.com/v0/bases/${process.env.AIRTABLE_BASE}/webhooks`,
      { notificationUrl: process.env.WEBHOOK_URL },
      { headers: { Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}` } }
    );
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post("/airtable", async (req, res) => {
  console.log("Webhook received:", req.body);

  const records = req.body.records;

  for (const r of records) {
    await ResponseModel.updateOne(
      { airtableId: r.id },
      { $set: r.fields },
      { upsert: true }
    );
  }

  res.sendStatus(200);
});

export default router;
