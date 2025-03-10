import React from 'react';
import './Contact.css';
import SignatureAnimation from './SignatureAnimation';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className='contactbox'>
          
          <h2>Contact</h2>
          <p>Email: <a href="mailto:kuba.maryska@gmail.com">kuba.maryska@gmail.com</a></p>
          <div className="contact-links">
            <a href="https://github.com/Ralfessoun" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> | </span>
            <a href="https://www.linkedin.com/in/ralfy/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        
      </div>
      <div className="signature-animation">
          {/*  <SignatureAnimation />*/}
        </div>
    </section>
  );
}

export default Contact;
