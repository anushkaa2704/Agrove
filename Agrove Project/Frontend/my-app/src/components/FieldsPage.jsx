import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FieldsPage = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState([]);

  const userEmail = localStorage.getItem("userEmail");

  // 🔹 LOAD FIELDS FROM MONGODB
  useEffect(() => {
    if (!userEmail) return;

    fetch(`http://localhost:5000/fields?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => setFields(data))
      .catch((err) => console.log("Error loading fields:", err));
  }, []);

  // 🔹 DELETE FIELD FROM MONGODB
  const deleteField = (id) => {
    fetch(`http://localhost:5000/fields/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Remove from UI
          setFields((prev) => prev.filter((f) => f._id !== id));
        } else {
          alert("Failed to delete field");
        }
      })
      .catch((err) => console.log("Delete error:", err));
  };

  return (
    <div className="page-wrapper fields-page-wrapper">
      <div className="container">
        <a onClick={() => navigate("/dashboard")} className="back-link" href="#">
          ← Back to Dashboard
        </a>

        <div className="flex-between mb-4">
          <h1>My Fields</h1>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/add-field")}
          >
            ➕ Add Field
          </button>
        </div>

        {fields.length === 0 && (
          <p className="text-muted" style={{ fontSize: "1.2rem" }}>
            No fields added yet.
          </p>
        )}

        <div className="fields-grid">
          {fields.map((field) => (
            <div key={field._id} className="field-card">
              <div className="field-card-header">
                <span style={{ fontSize: "2rem" }}>📍</span>
                <button
                  className="icon-btn icon-btn-danger"
                  onClick={() => deleteField(field._id)}
                >
                  🗑️
                </button>
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
                onClick={() => navigate(`/field/${field._id}`)}
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
