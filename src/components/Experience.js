import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      role: 'Product Owner',
      company: 'JABLOTRON ALARMS',
      period: '2022 – 2024',
      description: 'Collaborated with development teams on IoT cloud solutions and managed software feature development.'
    },
    {
      role: 'IT Consultant',
      company: 'Nobilis Tilia',
      period: '2022 – 2024',
      description: 'Developed and maintained internal tools and scripts using VBA, XML, and C#.'
    },
    {
      role: 'ERP Administrator / IT Support',
      company: 'Nobilis Tilia',
      period: '2020 – 2022',
      description: 'Managed ERP system, performed data operations, and developed automation solutions using C# and VBA.'
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.role} <span>at {exp.company}</span></h3>
            <p className="period">{exp.period}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
