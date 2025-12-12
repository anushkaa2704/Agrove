// HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <div className="text-center">
        <div className="export-icon-wrapper mb-4">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#727D73' }}>
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
            <path d="M7 12H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2" />
          </svg>
        </div>
        
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>AGROVE</h1>
        <p className="text-large text-muted mb-5">
          Digital Farm Management & Advisory Portal
        </p>
        
        <div className="flex-center gap-3">
          <button
            onClick={() => navigate('/login')}
            className="btn btn-primary btn-large"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="btn btn-secondary btn-large"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
