// ActivityListPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActivityListPage = () => {
  const navigate = useNavigate();
  
  const activities = [
    { id: 1, field: 'North Field', type: 'Sowing', date: '2024-01-15', notes: 'Initial wheat sowing' },
    { id: 2, field: 'North Field', type: 'Irrigation', date: '2024-01-20', notes: 'First irrigation cycle' },
    { id: 3, field: 'South Field', type: 'Fertilizer', date: '2024-01-22', notes: 'Applied NPK fertilizer' },
    { id: 4, field: 'East Field', type: 'Pesticide', date: '2024-02-01', notes: 'Pest control treatment' },
    { id: 5, field: 'West Field', type: 'Weeding', date: '2024-02-05', notes: 'Manual weeding completed' },
    { id: 6, field: 'Central Field', type: 'Harvest', date: '2024-02-10', notes: 'Partial harvest' },
  ];

  return (
    <div className="page-wrapper" style={{ alignItems: 'flex-start', paddingTop: '3rem' }}>
      <div className="container">
        <a href="#" onClick={() => navigate('/dashboard')} className="back-link">
          ← Back to Dashboard
        </a>

        <div className="mb-4">
          <h1>Activity Log</h1>
          <p className="text-large text-muted">Track all your farming activities</p>
        </div>

        <div className="card">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Activity</th>
                  <th>Date</th>
                  <th>Notes</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity) => (
                  <tr key={activity.id}>
                    <td><strong>{activity.field}</strong></td>
                    <td>
                      <span className="activity-badge">
                        📅 {activity.type}
                      </span>
                    </td>
                    <td className="text-muted">{activity.date}</td>
                    <td className="text-muted" style={{ maxWidth: '300px' }}>{activity.notes}</td>
                    <td>
                      <div className="flex gap-1" style={{ justifyContent: 'flex-end' }}>
                        <button className="icon-btn">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        </button>
                        <button className="icon-btn icon-btn-danger">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityListPage;
