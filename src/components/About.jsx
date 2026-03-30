import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  useScrollReveal();

  return (
    <section id="about">
      <div className="container">
        <div className="section-header fade-up">
          <h2>About <span className="accent-text">Me</span></h2>
        </div>

        <div className="about-content fade-in">

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              position: 'relative', width: '200px', height: '200px',
              marginBottom: '1.5rem', borderRadius: '32px',
              background: 'var(--text-primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '4rem', fontWeight: 'bold',
              border: '1px solid var(--border-color)',
              color: 'var(--bg-primary)', fontFamily: 'var(--font-heading)',
              overflow: 'hidden'
            }}>
              HS
              <img
                src="profile.png"
                alt="Harshad Shinde"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
            <div className="pill-badge">Open to Opportunities</div>
          </div>

          <div style={{ background: 'var(--bg-secondary)', padding: 'clamp(1.5rem, 4vw, 3rem)', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.85' }}>
              Hi, I'm <strong style={{ color: 'var(--text-primary)' }}>Harshad Shinde</strong> — a strategic Business Analyst and a meticulous QA Engineer.
              With dual expertise in defining <em>what</em> a product should do and ensuring it does it flawlessly, I bridge the gap between stakeholder vision and rigorous technical execution.
            </p>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.85' }}>
              I specialize in breaking down complex requirements into actionable specifications, validating software through deep manual testing, and driving agile projects to a successful launch without compromises.
            </p>

            <div className="stats-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {[
                { num: '1+', label: 'Year Experience' },
                { num: '10+', label: 'Projects Delivered' },
                { num: '100%', label: 'Client Satisfaction' },
              ].map(({ num, label }, i) => (
                <div key={i} className="stat-box fade-up" style={{ transitionDelay: `${0.1 * (i + 1)}s`, borderLeft: '3px solid var(--accent-primary)', paddingLeft: '1.25rem' }}>
                  <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', lineHeight: '1' }}>{num}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontWeight: '500', marginTop: '0.4rem', fontSize: '0.9rem' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
