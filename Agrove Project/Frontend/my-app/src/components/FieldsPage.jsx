// FieldsPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FieldsPage = () => {
  const navigate = useNavigate();

  const [fields, setFields] = useState([
    { id: 1, name: 'North Field', crop: 'Wheat', area: '5 acres', soilType: 'Loamy' },
    { id: 2, name: 'South Field', crop: 'Rice', area: '3 acres', soilType: 'Clay' },
    { id: 3, name: 'East Field', crop: 'Corn', area: '4 acres', soilType: 'Sandy' },
    { id: 4, name: 'West Field', crop: 'Soybean', area: '6 acres', soilType: 'Loamy' },
    { id: 5, name: 'Central Field', crop: 'Cotton', area: '7 acres', soilType: 'Clay' },
  ]);

  // DELETE FIELD
  const deleteField = (id) => {
    const updated = fields.filter((f) => f.id !== id);
    setFields(updated);
  };

  return (
    <div className="page-wrapper fields-page-wrapper">
      <div className="container">
        <a href="#" onClick={() => navigate('/dashboard')} className="back-link">
          ← Back to Dashboard
        </a>

        <div className="flex-between mb-4">
          <div>
            <h1>My Fields</h1>
            <p className="text-large text-muted">Manage all your agricultural fields</p>
          </div>
          <button
            onClick={() => navigate('/add-field')}
            className="btn btn-primary"
          >
            ➕ Add Field
          </button>
        </div>

        <div className="fields-grid">
          {fields.map((field) => (
            <div key={field.id} className="field-card">
              <div className="field-card-header">
                <span style={{ fontSize: '2rem' }}>📍</span>

                <div className="field-card-actions">
                  
                  {/* EDIT BUTTON */}
                  <button
                    className="icon-btn"
                    onClick={() => navigate(`/edit-field/${field.id}`, { state: { field } })}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </button>

                  {/* DELETE BUTTON */}
                  <button
                    className="icon-btn icon-btn-danger"
                    onClick={() => deleteField(field.id)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>

                </div>
              </div>

              <h3 className="mb-2">{field.name}</h3>

              <div style={{ marginBottom: '1rem' }}>
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
                style={{ width: '100%' }}
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
