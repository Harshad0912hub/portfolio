import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Skills = () => {
  useScrollReveal();

  const skills = [
    {
      icon: 'fa-solid fa-chart-line',
      title: 'Business Analysis',
      delay: '0.1s',
      tags: ['BRD & FRD Creation', 'User Stories', 'Acceptance Criteria', 'Agile Methodologies', 'JIRA & Confluence'],
    },
    {
      icon: 'fa-solid fa-bug',
      title: 'Quality Assurance',
      delay: '0.2s',
      tags: ['Manual Testing', 'Regression Testing', 'API Testing (Postman)', 'Test Scenario Design', 'Defect Lifecycle Management'],
    },
    {
      icon: 'fa-solid fa-robot',
      title: 'Automation & Tech',
      delay: '0.3s',
      tags: ['Selenium WebDriver', 'Java (Basic)', 'TestNG', 'HTML/CSS', 'SQL (Basic)'],
    },
  ];

  return (
    <section id="skills" className="bg-alt">
      <div className="container">
        <div className="section-header fade-up">
          <h2>Core <span className="accent-text">Skills</span></h2>
        </div>

        <div className="projects-grid">
          {skills.map(({ icon, title, delay, tags }) => (
            <div key={title} className="skill-card fade-up" style={{ transitionDelay: delay }}>
              <div className="project-icon">
                <i className={icon}></i>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', marginBottom: '1.25rem', fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}>
                {title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {tags.map(tag => (
                  <span key={tag} className="pill-badge">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
