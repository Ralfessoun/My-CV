import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'C#', level: 80 },
    { name: 'Java', level: 70 },
    { name: 'SQL', level: 75 },
    { name: 'VBA', level: 60 },
    { name: 'XML', level: 65 },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
