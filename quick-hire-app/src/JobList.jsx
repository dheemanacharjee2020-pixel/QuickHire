import React from 'react';
import JobCard from './card';

function JobList() {
  const jobData = [
    { id: 1, title: "Frontend Developer", company: "TechNova", salary: "₹8,00,000" },
    { id: 2, title: "UI/UX Designer", company: "Creative Minds", salary: "₹6,50,000" },
    { id: 3, title: "Backend Engineer", company: "DataFlow", salary: "₹10,00,000" },
    { id: 4, title: "React Specialist", company: "WebWizards", salary: "₹12,00,000" }
  ];

  const containerStyle = {
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '30px',
    marginTop: '30px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '2.5rem', borderBottom: '2px solid #2a2a35', paddingBottom: '15px', color: '#fff' }}>
        Available Positions
      </h2>
      
      <div style={gridStyle}>
        {jobData.map((job) => (
          <JobCard 
            key={job.id} 
            title={job.title} 
            company={job.company} 
            salary={job.salary} 
          />
        ))}
      </div>
    </div>
  );
}
export default JobList