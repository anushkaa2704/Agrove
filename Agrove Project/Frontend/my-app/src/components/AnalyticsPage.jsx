// AnalyticsPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnalyticsPage = () => {
  const navigate = useNavigate();

  const cropData = [
    { name: 'Wheat', area: 5, color: '#727D73' },
    { name: 'Rice', area: 3, color: '#AAB99A' },
    { name: 'Corn', area: 4, color: '#D0DDD0' },
    { name: 'Soybean', area: 6, color: '#F0F0D7' },
  ];

  const totalArea = cropData.reduce((sum, crop) => sum + crop.area, 0);

  return (
    <div className="page-wrapper" style={{ alignItems: 'flex-start', paddingTop: '3rem' }}>
      <div className="container">
        <a href="#" onClick={() => navigate('/dashboard')} className="back-link">
          ← Back to Dashboard
        </a>

        <h1 className="mb-4">Analytics & Insights</h1>

        <div className="stats-grid mb-4">
          <div className="stat-card">
            <span style={{ fontSize: '2rem', marginBottom: '0.75rem', display: 'block' }}>📈</span>
            <p className="stat-card-label">Total Area</p>
            <p className="stat-card-value">18 <span style={{ fontSize: '1.5rem' }}>acres</span></p>
          </div>
          <div className="stat-card">
            <span style={{ fontSize: '2rem', marginBottom: '0.75rem', display: 'block' }}>📍</span>
            <p className="stat-card-label">Active Fields</p>
            <p className="stat-card-value">5</p>
          </div>
          <div className="stat-card">
            <span style={{ fontSize: '2rem', marginBottom: '0.75rem', display: 'block' }}>📊</span>
            <p className="stat-card-label">Activities This Month</p>
            <p className="stat-card-value">23</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div className="card">
            <h2 className="mb-4">Crop Distribution by Area</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
              <div style={{ width: '250px', height: '250px', borderRadius: '50%', position: 'relative', background: 'conic-gradient(#727D73 0% 28%, #AAB99A 28% 45%, #D0DDD0 45% 67%, #F0F0D7 67% 100%)' }}></div>
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              {cropData.map((crop, index) => (
                <div key={index} className="flex-between mb-2">
                  <div className="flex gap-2" style={{ alignItems: 'center' }}>
                    <div style={{ width: '16px', height: '16px', background: crop.color, borderRadius: '4px' }}></div>
                    <span>{crop.name}</span>
                  </div>
                  <strong>{crop.area} acres ({Math.round((crop.area / totalArea) * 100)}%)</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h2 className="mb-4">Monthly Activity Timeline</h2>
            <div style={{ minHeight: '300px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', gap: '1rem', padding: '2rem 0' }}>
              {[
                { month: 'Jan', height: 120 },
                { month: 'Feb', height: 180 },
                { month: 'Mar', height: 150 },
                { month: 'Apr', height: 200 },
                { month: 'May', height: 140 },
              ].map((data, index) => (
                <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '100%', height: `${data.height}px`, background: 'linear-gradient(135deg, #727D73, #AAB99A)', borderRadius: '8px 8px 0 0' }}></div>
                  <p style={{ marginTop: '0.5rem', fontWeight: 600 }}>{data.month}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="mb-4">Yield Summary</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {cropData.map((crop) => (
              <div key={crop.name} className="stage-card">
                <p className="stage-card-label">{crop.name}</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2d3a2e', marginTop: '0.5rem' }}>
                  {crop.area * 2.5} tons
                </p>
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.25rem' }}>Expected yield</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
