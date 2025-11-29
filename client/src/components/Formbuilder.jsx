import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FormBuilder() {
  const [fields, setFields] = useState([]);
  const [formFields, setFormFields] = useState([]);

  useEffect(() => {
    axios.get("/airtable/fields").then(res => setFields(res.data));
  }, []);

  function addField(f) {
    setFormFields([...formFields, { label: f.name, airtableFieldId: f.id }]);
  }

  function saveForm() {
    axios.post("/form", {
      name: "My Form",
      fields: formFields
    });
  }

  return (
    <div>
      <h2>Create Form</h2>
      <h3>Airtable Fields</h3>
      {fields.map(f => (
        <button key={f.id} onClick={() => addField(f)}>
          {f.name}
        </button>
      ))}

      <h3>Selected</h3>
      {formFields.map(f => (
        <div key={f.airtableFieldId}>{f.label}</div>
      ))}

      <button onClick={saveForm}>Save Form</button>
    </div>
  );
}
