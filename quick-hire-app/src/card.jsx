import React from 'react';
import Button from './Button';

 function JobCard({ title, company, salary }) {
  const cardStyle = {
    border: '1px solid #2a2a35',
    padding: '30px',
    borderRadius: '12px',
    backgroundColor: '#1a1a24',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const titleStyle = {
    margin: '0 0 10px 0', 
    color: '#ffffff', 
    fontSize: '1.5rem'
  };

  const textStyle = {
    margin: '8px 0', 
    color: '#a0a0a0', 
    fontSize: '16px'
  };

  const highlightStyle = {
    color: '#00d2ff',
    fontWeight: 'bold'
  };

  return (
    <div style={cardStyle}>
      <div>
        <h2 style={titleStyle}>{title}</h2>
        <p style={textStyle}>Company: <span style={{ color: '#e0e0e0' }}>{company}</span></p>
        <p style={textStyle}>Salary: <span style={highlightStyle}>{salary}</span></p>
      </div>
      
      <div style={{ marginTop: '25px' }}>
        <Button 
          text="Apply Now" 
          color="#00d2ff" 
          onClick={() => alert(`Success! You applied to ${company}`)} 
        />
      </div>
    </div>
  );
}
export default JobCard