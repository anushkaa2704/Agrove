// FieldDetailsPage.jsx
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FieldDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const field = {
    id: id,
    name: 'North Field',
    crop: 'Wheat',
    area: '5 acres',
    soilType: 'Loamy',
    plantedDate: '2024-01-15',
  };

  const activities = [
    { id: 1, type: 'Sowing', date: '2024-01-15', notes: 'Initial wheat sowing' },
    { id: 2, type: 'Irrigation', date: '2024-01-20', notes: 'First irrigation cycle' },
    { id: 3, type: 'Fertilizer', date: '2024-02-01', notes: 'Applied NPK fertilizer' },
    { id: 4, type: 'Pesticide', date: '2024-02-15', notes: 'Pest control treatment' },
  ];

  return (
    <div className="page-wrapper" style={{ alignItems: 'flex-start', paddingTop: '3rem' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <a href="#" onClick={() => navigate('/fields')} className="back-link">
          ← Back to Fields
        </a>

        <div className="card mb-4">
          <div className="flex-between mb-4">
            <div className="flex gap-3" style={{ alignItems: 'center' }}>
              <span style={{ fontSize: '2.5rem' }}>📍</span>
              <div>
                <h1 style={{ marginBottom: '0.25rem' }}>{field.name}</h1>
                <p className="text-muted">Field Details</p>
              </div>
            </div>
            <button className="btn btn-primary">Edit Field</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
            <div>
              <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>Crop</p>
              <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>{field.crop}</p>
            </div>
            <div>
              <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>Area</p>
              <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>{field.area}</p>
            </div>
            <div>
              <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>Soil Type</p>
              <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>{field.soilType}</p>
            </div>
            <div>
              <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>Planted</p>
              <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>{field.plantedDate}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex-between mb-4">
            <h2>Field Activities</h2>
            <button
              onClick={() => navigate('/add-activity')}
              className="btn btn-primary"
            >
              ➕ Add Activity
            </button>
          </div>

          <div>
            {activities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="flex-between">
                  <div className="flex gap-2" style={{ alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.5rem' }}>📅</span>
                    <div>
                      <h3 style={{ marginBottom: '0.25rem', fontSize: '1.1rem' }}>{activity.type}</h3>
                      <p className="text-muted" style={{ fontSize: '0.9rem' }}>{activity.date}</p>
                      <p style={{ marginTop: '0.5rem' }}>{activity.notes}</p>
                    </div>
                  </div>
                  <button className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldDetailsPage;
