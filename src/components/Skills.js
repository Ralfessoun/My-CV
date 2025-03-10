import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'C#', level: 65 },
    { name: 'Java', level: 60 },
    { name: 'JavaScript', level: 40 },
    { name: 'VBA', level: 60 },
    { name: 'XML', level: 50 },
    { name: 'CSS', level: 35 }
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

