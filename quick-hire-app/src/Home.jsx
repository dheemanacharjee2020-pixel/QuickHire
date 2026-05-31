import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

 function Home() {
  const navigate = useNavigate();

  const containerStyle = {
    textAlign: 'center',
    padding: '100px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const headingStyle = {
    fontSize: '4rem',
    margin: '0 0 20px 0',
    background: 'linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)', // Neon gradient
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: '800'
  };

  const inputStyle = {
    padding: '14px 20px',
    width: '350px',
    borderRadius: '8px',
    border: '1px solid #333',
    backgroundColor: '#1a1a24',
    color: '#fff',
    fontSize: '16px',
    outline: 'none'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Find Your Dream Job Today</h1>
      <p style={{ color: '#a0a0a0', fontSize: '1.2rem', marginBottom: '40px' }}>
        The fastest way to get hired. Three clicks is all it takes.
      </p>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '15px' }}>
        <input 
          type="text" 
          placeholder="e.g., Designer or Developer" 
          style={inputStyle}
        />
        <Button 
          text="Browse All Jobs" 
          onClick={() => navigate('/jobs')} 
        />
      </div>
    </div>
  );
}
export default Home