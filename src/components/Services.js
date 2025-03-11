import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services">
      <h2>What Can I Do for You?</h2>
      <div className="service-cards">
        {/* Existing Cards */}
        <div className="service-card">
          <i className="fas fa-code"></i>
          <h3>Code Websites</h3>
          <p>Craft responsive and engaging front-end solutions.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-server"></i>
          <h3>Code Backends</h3>
          <p>Develop robust server-side logic and integrations.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-project-diagram"></i>
          <h3>Lead Projects</h3>
          <p>Manage agile teams and drive project success.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-cogs"></i>
          <h3>Automate Processes</h3>
          <p>Implement ERP integrations and data automation to optimize workflows.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-check-circle"></i>
          <h3>Quality Assurance</h3>
          <p>Ensure reliability through thorough testing and bug tracking.</p>
        </div>
        <div className="service-card">
          <i className="fas fa-tasks"></i>
          <h3>Agile Management</h3>
          <p>Boost productivity with Scrum & Kanban methodologies.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;