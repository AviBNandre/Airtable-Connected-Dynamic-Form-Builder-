const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: String,
  fields: [
    {
      label: String,
      type: String,
      airtableFieldId: String,
      condition: {
        dependsOn: String,
        equals: String
      }
    }
  ]
});

module.exports = mongoose.model("Form", formSchema);
