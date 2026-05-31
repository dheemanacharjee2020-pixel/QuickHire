import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import JobList from './JobList';

 function App() {
  const appContainerStyle = {
    minHeight: '100vh',
    backgroundColor: '#0f0f13', // Deepest dark background
    color: '#ffffff',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
  };

  const navStyle = {
    padding: '20px 40px',
    backgroundColor: '#1a1a24',
    borderBottom: '2px solid #00d2ff',
    display: 'flex',
    gap: '30px',
    boxShadow: '0 4px 15px rgba(0, 210, 255, 0.1)' // Soft neon shadow under nav
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#e0e0e0',
    fontWeight: '600',
    fontSize: '18px',
    letterSpacing: '0.5px'
  };

  return (
    <Router>
      <div style={appContainerStyle}>
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/jobs" style={linkStyle}>Browse Jobs</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobList />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App