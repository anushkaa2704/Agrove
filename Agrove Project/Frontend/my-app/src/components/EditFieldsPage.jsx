// EditFieldsPage.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditFieldsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const field = location.state?.field;

  const [name, setName] = useState(field?.name || "");
  const [crop, setCrop] = useState(field?.crop || "");
  const [area, setArea] = useState(field?.area || "");
  const [soilType, setSoilType] = useState(field?.soilType || "");

  const handleSave = () => {
    alert("Field updated successfully!");
    navigate("/fields");
  };

  return (
    <div className="page-wrapper edit-field-wrapper">
      <div className="container edit-field-container">
        
        <h1>Edit Field</h1>
        <p className="text-muted mb-4">Modify your field details</p>

        <div className="card edit-field-card">

          <div className="form-group">
            <label className="form-label">Field Name</label>
            <input
              type="text"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Crop Type</label>
            <input
              type="text"
              className="form-input"
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Area</label>
            <input
              type="text"
              className="form-input"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Soil Type</label>
            <input
              type="text"
              className="form-input"
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
            />
          </div>

          <button onClick={handleSave} className="btn btn-primary" style={{ width: "100%" }}>
            💾 Save Changes
          </button>

          <button
            onClick={() => navigate("/fields")}
            className="btn btn-outline mt-2"
            style={{ width: "100%" }}
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
};

export default EditFieldsPage;
