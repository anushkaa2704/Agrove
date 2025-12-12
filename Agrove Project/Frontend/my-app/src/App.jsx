// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import FieldsPage from './components/FieldsPage';
import AddFieldPage from './components/AddFieldPage';
import FieldDetailsPage from './components/FieldDetailsPage';
import AddActivityPage from './components/AddActivityPage';
import ActivityListPage from './components/ActivityListPage';
import AdvisoryPage from './components/AdvisoryPage';
import AnalyticsPage from './components/AnalyticsPage';
import ExportPage from './components/ExportPage';
import LogoutPage from './components/LogoutPage';
import LoginOtp from "./components/LoginOtp";
import './styles.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fields" element={<FieldsPage />} />
        <Route path="/add-field" element={<AddFieldPage />} />
        <Route path="/field/:id" element={<FieldDetailsPage />} />
        <Route path="/add-activity" element={<AddActivityPage />} />
        <Route path="/activities" element={<ActivityListPage />} />
        <Route path="/advisory" element={<AdvisoryPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/export" element={<ExportPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/login-otp" element={<LoginOtp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
