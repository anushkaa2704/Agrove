// LogoutPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="page-wrapper">
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <div className="card text-center">
          <div className="export-icon-wrapper mb-4" style={{ width: '100px', height: '100px' }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#727D73" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </div>
          
          <h2 className="mb-2">Logout</h2>
          <p className="text-large text-muted mb-5">
            Are you sure you want to log out of your Agrove account?
          </p>
          
          <div className="flex gap-2">
            <button
              onClick={() => navigate('/dashboard')}
              className="btn btn-secondary"
              style={{ flex: 1 }}
            >
              Cancel
            </button>
            <button
              onClick={handleLogout}
              className="btn btn-primary"
              style={{ flex: 1 }}
            >
              Yes, Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
