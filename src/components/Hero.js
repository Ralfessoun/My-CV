import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <h1>Jakub Maryška</h1>
        <p>Aspiring Software Developer</p>
      </div>
    </motion.section>
  );
}

export default Hero;
