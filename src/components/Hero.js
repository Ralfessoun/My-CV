import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  const [showNickname, setShowNickname] = React.useState(false);

  const handleClick = () => {
    setShowNickname(true);
    setTimeout(() => {
      setShowNickname(false);
    }, 2000);
  };

  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onClick={handleClick}
    >
      <div className='fuzzy-overlay'>
      <div className="hero-content">
      <h1 className="hero-name">
          {showNickname ? 'Jakub "Ralfy" Maryška' : 'Jakub Maryška'}
        </h1>
        <p>Aspiring Software Developer</p>
      </div>
      </div>
    </motion.section>
  );

}

export default Hero;
