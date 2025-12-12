// AddFieldPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddFieldPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    area: '',
    unit: 'acres',
    cropType: '',
    soilType: '',
  });

const handleSubmit = (e) => {
  e.preventDefault();

  const userEmail = localStorage.getItem("userEmail"); // current logged-in user

  if (!userEmail) {
    alert("User not logged in!");
    return;
  }

  const newField = {
    userEmail: userEmail,
    name: formData.name,
    crop: formData.cropType,
    area: `${formData.area} ${formData.unit}`,
    soilType: formData.soilType
  };

  fetch("http://localhost:5000/add-field", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newField)
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      navigate("/fields");
    } else {
      alert("Failed to add field");
    }
  })
  .catch(err => console.log("Error adding field:", err));
};



  return (
    <div className="page-wrapper">
      <div style={{ width: '100%', maxWidth: '700px' }}>
        <a href="#" onClick={() => navigate('/fields')} className="back-link">
          ← Back to Fields
        </a>
        
        <div className="card">
          <div className="flex gap-2 mb-4" style={{ alignItems: 'center' }}>
            <span style={{ fontSize: '2rem' }}>📍</span>
            <h2 style={{ margin: 0 }}>Add New Field</h2>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Field Name</label>
              <input
                type="text"
                required
                className="form-input"
                placeholder="e.g., North Field"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Area</label>
                <input
                  type="number"
                  required
                  step="0.1"
                  className="form-input"
                  placeholder="0.0"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Unit</label>
                <select
                  className="form-select"
                  value={formData.unit}
                  onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                >
                  <option value="acres">Acres</option>
                  <option value="hectares">Hectares</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Crop Type</label>
              <select
                required
                className="form-select"
                value={formData.cropType}
                onChange={(e) => setFormData({ ...formData, cropType: e.target.value })}
              >
                <option value="">Select crop type</option>
                <option value="wheat">Wheat</option>
                <option value="rice">Rice</option>
                <option value="corn">Corn</option>
                <option value="soybean">Soybean</option>
                <option value="cotton">Cotton</option>
                <option value="vegetables">Vegetables</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Soil Type</label>
              <select
                required
                className="form-select"
                value={formData.soilType}
                onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
              >
                <option value="">Select soil type</option>
                <option value="loamy">Loamy</option>
                <option value="clay">Clay</option>
                <option value="sandy">Sandy</option>
                <option value="silty">Silty</option>
              </select>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
              Add Field
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFieldPage;
