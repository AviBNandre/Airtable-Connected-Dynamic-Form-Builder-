import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import airtableRoutes from './routes/airtable.js';
import formRoutes from './routes/form.routes.js';
import responseRoutes from './routes/response.routes.js';
import webhookRoutes from './routes/webhook.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Mount routes
app.use("/auth", authRoutes);
app.use("/airtable", airtableRoutes);
app.use("/form", formRoutes);
app.use("/responses", responseRoutes);
app.use("/webhook", webhookRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
