import React from 'react';
import Skills from './Skills';
import Experience from './Experience'; // Import the Experience component
import './Skillexp.css';

function Skillexp() {
  return (
    <section id="Skillexp" className="Skillexp">
      <div className="experience-skills-container">
        <Experience />
        <Skills />
      </div>
    </section>
  );
}

export default Skillexp;