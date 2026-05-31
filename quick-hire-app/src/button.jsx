import React from 'react';

 function Button({ text, onClick, color = '#00d2ff' }) {
  const buttonStyle = {
    backgroundColor: 'transparent',
    color: color,
    padding: '12px 28px',
    border: `2px solid ${color}`,
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: `0 0 10px ${color}40`, // Subtle neon glow
    transition: 'all 0.3s ease'
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
}
export default Button