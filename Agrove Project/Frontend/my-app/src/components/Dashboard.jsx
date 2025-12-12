import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Dashboard = () => {  
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "Farmer" });

  useEffect(() => {
    // Get mobile number stored during login/signup
    const mobile = localStorage.getItem("userMobile");

    if (mobile) {
      fetch(`http://localhost:5000/user-mobile/${mobile}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.name) {
            setUser({ name: data.name });
          }
        })
        .catch(err => console.log("Error fetching user:", err));
    }
  }, []);

  const stats = [
    { title: 'Total Fields', value: '5', icon: '📍' },
    { title: 'Total Activities', value: '23', icon: '📊' },
    { title: 'Active Crops', value: '8', icon: '🌱' },
    { title: 'Reports', value: '12', icon: '📄' },
  ];

  const quickActions = [
    { title: 'Manage Fields', desc: 'View and manage all your fields', icon: '📍', path: '/fields' },
    { title: 'Add New Field', desc: 'Register a new field to your farm', icon: '➕', path: '/add-field' },
    { title: 'Activity Log', desc: 'Track all farming activities', icon: '📊', path: '/activities' },
  ];

  return (
    <div>
      <Navbar />

      <div className="dashboard-bg">
        <div className="dashboard-overlay"></div>

        <div className="dashboard-content">
          <div className="container">
            <div className="mb-5">
              <h1>Welcome, {user.name}!</h1>
              <p className="text-large text-muted">
                Here's what's happening with your farm today
              </p>
            </div>

            <div className="stats-grid mb-5">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-card-header">
                    <div>
                      <p className="stat-card-label">{stat.title}</p>
                      <p className="stat-card-value">{stat.value}</p>
                    </div>
                    <span style={{ fontSize: '2.5rem' }}>{stat.icon}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-grid">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => navigate(action.path)}
                  className="card"
                  style={{
                    textAlign: 'left',
                    border: 'none',
                    cursor: 'pointer',
                    background: 'rgba(255, 255, 255, 0.95)',
                  }}
                >
                  <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>
                    {action.icon}
                  </span>
                  <h3 style={{ marginBottom: '0.5rem' }}>{action.title}</h3>
                  <p className="text-muted">{action.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
