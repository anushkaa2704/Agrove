// ExportPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExportPage = () => {
  const navigate = useNavigate();

  const handleExport = () => {
    const csvContent = `Field Name,Crop Type,Area,Activities Count
North Field,Wheat,5 acres,12
South Field,Rice,3 acres,8
East Field,Corn,4 acres,15
West Field,Soybean,6 acres,10
Central Field,Cotton,7 acres,14`;

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `agrove-farm-data-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div className="page-wrapper">
      <div className="export-container">
        <a href="#" onClick={() => navigate('/dashboard')} className="back-link">
          ← Back to Dashboard
        </a>
        
        <div className="card text-center">
          <div className="export-icon-wrapper">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#727D73" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          
          <h2 className="mb-2">Export Farm Data</h2>
          <p className="text-large text-muted mb-4">
            Download all your farm data including fields, activities, and analytics in CSV format
          </p>
          
          <div className="export-features mb-4">
            <h3 style={{ fontWeight: 600, marginBottom: '1rem' }}>Export includes:</h3>
            <ul>
              <li>Complete field information</li>
              <li>All recorded activities with dates</li>
              <li>Crop distribution data</li>
              <li>Analytics summary</li>
            </ul>
          </div>
          
          <button
            onClick={handleExport}
            className="btn btn-primary btn-large"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem' }}>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CSV
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportPage;
