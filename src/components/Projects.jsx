import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const projectsData = [
  {
    id: 1,
    title: 'Womaty Network',
    category: 'QA & BA Lead',
    icon: 'fa-solid fa-users',
    description: 'Led the QA and BA efforts for a large-scale, women-centric platform engineered to support millions of active users. Authored comprehensive BRDs covering complex modules like Womunity, Womtime, Womdeal, and real-time WebSocket messaging.',
    impact: 'Orchestrated comprehensive UAT testing for critical subscription paywalls (Stripe/App Store), ensured GDPR compliance, and designed precise acceptance criteria.'
  },
  {
    id: 2,
    title: 'Kindpocket',
    category: 'QA & BA Lead',
    icon: 'fa-solid fa-leaf',
    description: 'Drove the requirements and quality assurance for Kindpocket (formerly Green-Dose), a mobile-first platform mitigating wellness product waste by offering near-expiry inventory at affordable rates. Iteratively defined user stories for Clearance Workflows, Multi-Vendor Portals, and real-time delivery tracking.',
    impact: 'Streamlined the MVP sprint deliveries by mapping out precise acceptance criteria for smart cart logic, B2C/B2B inventory models, and payment gateways.'
  },
  {
    id: 3,
    title: 'QA Automation',
    category: 'Automation Specialist',
    icon: 'fa-solid fa-shield-halved',
    description: 'Architected a robust automation framework utilizing Selenium, Java, and TestNG to eliminate manual redundancy. Implemented Data-Driven Testing (DDT) and the Page Object Model (POM) design pattern for high maintainability across hundreds of test cases.',
    impact: 'Reduced manual regression cycle time by 60%, integrated detailed Extent Reports for quick stakeholder visibility, and improved delivery confidence.'
  }
];

const Projects = () => {
  useScrollReveal();
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'QA & BA Lead', 'Automation Specialist'];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header fade-up" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem', marginBottom: '3.5rem' }}>
          <h2 style={{ marginBottom: 0 }}>Featured <span className="accent-text">Projects</span></h2>
          
          <div className="project-filters" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="pill-badge"
                style={{ 
                  cursor: 'pointer', 
                  transition: 'all 0.3s ease',
                  background: filter === cat ? 'var(--text-primary)' : 'var(--bg-secondary)',
                  color: filter === cat ? 'var(--bg-secondary)' : 'var(--text-secondary)',
                  borderColor: filter === cat ? 'var(--text-primary)' : 'var(--border-color)',
                  padding: '0.55rem 1.2rem'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="project-card fade-up" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}>
              <div className="project-icon">
                <i className={project.icon}></i>
              </div>
              <div className="project-content">
                <div className="pill-badge" style={{ marginBottom: '1.5rem', background: 'var(--bg-primary)' }}>
                  {project.category}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                  {project.description}
                </p>
                <p style={{ color: 'var(--text-primary)', fontWeight: '500' }}>
                  <strong style={{ color: 'var(--accent-primary)' }}>Impact:</strong> {project.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
