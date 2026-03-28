import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Achievements = () => {
  useScrollReveal();

  const items = [
    {
      icon: 'fa-solid fa-trophy',
      title: 'Zero Defect Delivery',
      delay: '0.1s',
      text: "Successfully managed the QA lifecycle for the Womaty Network's subscription paywall integration, resulting in zero critical post-production defects across thousands of active premium users.",
    },
    {
      icon: 'fa-solid fa-bolt',
      title: 'Accelerated QA Cycle',
      delay: '0.2s',
      text: 'Architected a custom Selenium & TestNG Automation Framework from scratch, significantly reducing manual regression testing time by an impressive 60%.',
    },
    {
      icon: 'fa-solid fa-star',
      title: 'MVP Launch Velocity',
      delay: '0.3s',
      text: 'Authored over 100+ precise User Stories and Acceptance Criteria for Kindpocket, enabling the development team to launch the MVP successfully under aggressive 2-month timelines.',
    },
  ];

  return (
    <section id="achievements">
      <div className="container">
        <div className="section-header fade-up">
          <h2>Key <span className="accent-text">Achievements</span></h2>
        </div>

        <div className="projects-grid">
          {items.map(({ icon, title, delay, text }) => (
            <div key={title} className="skill-card fade-up" style={{ transitionDelay: delay }}>
              <div className="project-icon">
                <i className={icon}></i>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', marginBottom: '1rem', fontSize: 'clamp(1.5rem, 3.5vw, 2rem)' }}>
                {title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.75', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
