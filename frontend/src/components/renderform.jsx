import React, { useEffect, useState } from "react";
import axios from "axios";

function RenderForm({ formId }) {
  const [form, setForm] = useState(null);
  const [responses, setResponses] = useState({});

  useEffect(() => {
    axios.get(`/api/form/${formId}`).then(res => setForm(res.data));
  }, [formId]);

  if (!form) return <p>Loading form...</p>;

  const handleChange = (field, value) => {
    setResponses({ ...responses, [field]: value });
  };

  return (
    <div>
      <h2>{form.formName}</h2>

      {form.fields.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>

          <input
            type={field.type}
            onChange={(e) => handleChange(field.label, e.target.value)}
          />
        </div>
      ))}

      <button onClick={() => alert(JSON.stringify(responses))}>
        Submit
      </button>
    </div>
  );
}

export default RenderForm;
