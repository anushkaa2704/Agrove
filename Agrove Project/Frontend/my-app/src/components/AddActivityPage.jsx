// AddActivityPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddActivityPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    field: '',
    activityType: '',
    date: '',
    notes: '',
  });

  const activityTypes = [
    'Sowing',
    'Irrigation',
    'Fertilizer',
    'Pesticide',
    'Harvest',
    'Weeding',
    'Notes',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/activities');
  };

  return (
    <div className="page-wrapper">
      <div style={{ width: '100%', maxWidth: '700px' }}>
        <a href="#" onClick={() => navigate('/dashboard')} className="back-link">
          ← Back to Dashboard
        </a>
        
        <div className="card">
          <div className="flex gap-2 mb-4" style={{ alignItems: 'center' }}>
            <span style={{ fontSize: '2rem' }}>📊</span>
            <h2 style={{ margin: 0 }}>Log New Activity</h2>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Select Field</label>
              <select
                required
                className="form-select"
                value={formData.field}
                onChange={(e) => setFormData({ ...formData, field: e.target.value })}
              >
                <option value="">Choose a field</option>
                <option value="1">North Field</option>
                <option value="2">South Field</option>
                <option value="3">East Field</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Activity Type</label>
              <div className="activity-type-grid">
                {activityTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, activityType: type })}
                    className={`activity-type-btn ${formData.activityType === type ? 'active' : ''}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Activity Date</label>
              <input
                type="date"
                required
                className="form-input"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Notes</label>
              <textarea
                className="form-textarea"
                placeholder="Add any additional notes or observations..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
              Save Activity
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddActivityPage;
