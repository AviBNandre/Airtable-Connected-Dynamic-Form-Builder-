const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  airtableToken: String
});

module.exports = mongoose.model("User", userSchema);
