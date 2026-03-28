import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Projects = () => {
  useScrollReveal();

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header fade-up">
          <h2>Featured <span className="accent-text">Projects</span></h2>
        </div>

        <div className="projects-grid">

          {/* Project 1: Womaty */}
          <div className="project-card fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="project-icon">
              <i className="fa-solid fa-users"></i>
            </div>
            <div className="project-content">
              <div className="pill-badge" style={{ marginBottom: '1.5rem', background: 'var(--bg-primary)' }}>
                QA & BA Lead
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>Womaty Network</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                Led the QA and BA efforts for a large-scale, women-centric platform engineered to support millions of active users.
                Authored comprehensive BRDs covering complex modules like <strong>Womunity</strong> (geolocation matching), <strong>Womtime</strong> (activities), <strong>Womdeal</strong> (business subscriptions), and real-time WebSocket messaging.
              </p>
              <p style={{ color: 'var(--text-primary)', fontWeight: '500' }}>
                <strong style={{ color: 'var(--accent-primary)' }}>Impact:</strong> Orchestrated comprehensive UAT testing for critical subscription paywalls (Stripe/App Store),
                ensured GDPR compliance, and designed precise acceptance criteria.
              </p>
            </div>
          </div>

          {/* Project 2: Kindpocket */}
          <div className="project-card fade-up" style={{ transitionDelay: '0.2s' }}>
            <div className="project-icon">
              <i className="fa-solid fa-leaf"></i>
            </div>
            <div className="project-content">
              <div className="pill-badge" style={{ marginBottom: '1.5rem', background: 'var(--bg-primary)' }}>
                QA & BA Lead
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>Kindpocket</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                Drove the requirements and quality assurance for <strong>Kindpocket</strong> (formerly Green-Dose), a mobile-first platform mitigating wellness product waste by offering near-expiry inventory at affordable rates.
                Iteratively defined user stories for <strong>Clearance Workflows</strong>, Multi-Vendor Portals, and real-time delivery tracking.
              </p>
              <p style={{ color: 'var(--text-primary)', fontWeight: '500' }}>
                <strong style={{ color: 'var(--accent-primary)' }}>Impact:</strong> Streamlined the MVP sprint deliveries by mapping out precise acceptance criteria for smart cart logic, B2C/B2B inventory models, and payment gateways.
              </p>
            </div>
          </div>

          {/* Project 3: Automation Framework */}
          <div className="project-card fade-up" style={{ transitionDelay: '0.3s' }}>
            <div className="project-icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div className="project-content">
              <div className="pill-badge" style={{ marginBottom: '1.5rem', background: 'var(--bg-primary)' }}>
                Automation Specialist
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>QA Automation</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                Architected a robust automation framework utilizing <strong>Selenium, Java, and TestNG</strong> to eliminate manual redundancy.
                Implemented Data-Driven Testing (DDT) and the Page Object Model (POM) design pattern for high maintainability across hundreds of test cases.
              </p>
              <p style={{ color: 'var(--text-primary)', fontWeight: '500' }}>
                <strong style={{ color: 'var(--accent-primary)' }}>Impact:</strong> Reduced manual regression cycle time by 60%, integrated detailed Extent Reports for quick stakeholder visibility, and improved delivery confidence.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
