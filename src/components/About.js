import React from 'react';
import './About.css';
import profilePic from '../assets/me.jpg';

function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">
      <p>
        <h2>About Me</h2>
        {/*Motivated and detail-oriented aspiring software developer with hands-on experience in software development, testing, and IT administration. Passionate about coding and continuously learning new technologies.
      */}
        I am a motivated and detail oriented junior who aspires to become a professional. I have experience with programming languages such as C#, Java and SQL and experience with agile environments (Scrum, Kanban). My hands-on approach, analytical mindset, and passion for innovation allow me to effectively collaborate with teams and solve technical problems. I am looking for an opportunity where I can further develop my skills as a Junior Developer or QA Engineer and contribute to dynamic software development.
      </p>
      <div className="profile-pic">
        <img src={profilePic} alt="Profile" />
      </div>
      </div>
    </section>
  );
}

export default About;