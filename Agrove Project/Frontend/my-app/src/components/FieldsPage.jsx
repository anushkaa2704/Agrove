// FieldsPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FieldsPage = () => {
  const navigate = useNavigate();

  const [fields, setFields] = useState([]);

  // Load fields from localStorage when page opens
  useEffect(() => {
    const savedFields = JSON.parse(localStorage.getItem("fields") || "[]");
    setFields(savedFields);
  }, []);

  // DELETE a field
  const deleteField = (id) => {
    const updatedFields = fields.filter((field) => field.id !== id);

    setFields(updatedFields); // update state
    localStorage.setItem("fields", JSON.stringify(updatedFields)); // update storage
  };

  return (
    <div className="page-wrapper fields-page-wrapper">
      <div className="container">
        <a onClick={() => navigate("/dashboard")} className="back-link" href="#">
          ← Back to Dashboard
        </a>

        <div className="flex-between mb-4">
          <div>
            <h1>My Fields</h1>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => navigate("/add-field")}
          >
            ➕ Add Field
          </button>
        </div>

        {/* If no fields added */}
        {fields.length === 0 && (
          <p className="text-muted" style={{ fontSize: "1.2rem" }}>
            No fields added yet. Click "Add Field" to create your first field.
          </p>
        )}

        {/* Display fields if available */}
        <div className="fields-grid">
          {fields.map((field) => (
            <div key={field.id} className="field-card">
              <div className="field-card-header">
                <span style={{ fontSize: "2rem" }}>📍</span>

                <div className="field-card-actions">

                  {/* DELETE BUTTON */}
                  <button
                    className="icon-btn icon-btn-danger"
                    onClick={() => deleteField(field.id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>

              <h3 className="mb-2">{field.name}</h3>

              <div style={{ marginBottom: "1rem" }}>
                <div className="flex-between mb-1">
                  <span className="text-muted">Crop:</span>
                  <strong>{field.crop}</strong>
                </div>
                <div className="flex-between mb-1">
                  <span className="text-muted">Area:</span>
                  <strong>{field.area}</strong>
                </div>
                <div className="flex-between">
                  <span className="text-muted">Soil:</span>
                  <strong>{field.soilType}</strong>
                </div>
              </div>

              <button
                onClick={() => navigate(`/field/${field.id}`)}
                className="btn btn-outline"
                style={{ width: "100%" }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FieldsPage;
