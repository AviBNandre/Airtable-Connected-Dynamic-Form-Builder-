import mongoose from "mongoose";

const ResponseSchema = new mongoose.Schema(
  {
    formId: String,
    fields: Object
  },
  { timestamps: true }
);

export default mongoose.model("response", ResponseSchema);
