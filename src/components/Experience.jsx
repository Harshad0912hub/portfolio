import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Experience = () => {
  useScrollReveal();

  return (
    <section id="experience" className="bg-alt">
      <div className="container">
        <div className="section-header fade-up">
          <h2>Work <span className="accent-text">Experience</span></h2>
        </div>

        <div className="timeline">

          {/* Experience Item 1 */}
          <div className="timeline-item fade-in-right" style={{ transitionDelay: '0.1s' }}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', margin: 0 }}>QA Engineer & BA</h3>
                <span className="pill-badge" style={{ background: 'var(--bg-primary)' }}>Sept 2022 - Present</span>
              </div>
              <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: '600' }}>Nimap Infotech</h4>

              <ul style={{ color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                <li>Bridged the gap between non-technical stakeholders and engineering teams by actively translating product vision into comprehensive user stories and explicit Acceptance Criteria.</li>
                <li>Executed deep manual testing and UAT across complex mobile apps and web portals, ensuring zero-defect deliverables for highly scalable platforms like the Womaty Network.</li>
                <li><strong>Tools & Frameworks:</strong> Jira, Postman, Selenium Webdriver, Agile/Scrum.</li>
              </ul>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="timeline-item fade-in-right" style={{ transitionDelay: '0.2s' }}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', margin: 0 }}>Software Testing Intern</h3>
                <span className="pill-badge" style={{ background: 'var(--bg-primary)' }}>Jan 2022 - Aug 2022</span>
              </div>
              <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: '600' }}>Tech Innovations Ltd</h4>

              <ul style={{ color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                <li>Contributed to daily smoke and regression test cycles for B2B e-commerce platforms, drafting structured Test Cases and identifying critical UI/UX bottlenecks.</li>
                <li><strong>Key Win:</strong> Logged over 150+ valid defects into the tracking system, significantly improving overall pre-release software stability.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
