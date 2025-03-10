import React from 'react';
import Skills from './Skills';
import Experience from './Experience'; // Import the Experience component
import './Skillexp.css';
import { motion } from 'framer-motion';

function Skillexp() {
  return (
    <section id="Skillexp" className="Skillexp">
      <div className="experience-skills-container">
        <motion.div className="motion-div" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <Experience />
        </motion.div>
        <motion.div className="motion-div" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
          <Skills />
        </motion.div>
      </div>
    </section>
  );
}

export default Skillexp;