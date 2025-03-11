import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {


  return (
    <motion.section 
      id="hero"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      
    >
      <div className="hero-left">
        <div className="hero-content">
          <h1 className="hero-name">Jakub Maryška</h1>
          <p>Aspiring Software Developer</p>
        </div>
      </div>
      <div className="hero-right">
        {/* You can add content for the right half here if needed */}
      </div>
    </motion.section>
  );
}

export default Hero;
