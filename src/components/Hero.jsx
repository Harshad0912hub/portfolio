import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Hero = () => {
  useScrollReveal();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setTilt({ x: x * 25, y: -y * 25 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '90px' }}>
      <div className="container hero-grid">

        <div className="hero-text fade-in-right">
          <div className="pill-badge pulse-soft" style={{ marginBottom: '1.5rem' }}>
            <span className="status-dot"></span>
            Available for Work
          </div>

          <h1 style={{ marginBottom: '1.25rem' }}>
            Quality Assurance &<br />
            <span className="accent-text">Business Analyst</span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: 'var(--text-secondary)', maxWidth: '480px', marginBottom: '2.5rem', fontWeight: '400', lineHeight: '1.7' }}>
            Hi, I'm <strong style={{ color: 'var(--text-primary)' }}>Harshad Shinde</strong>. I specialize in bridging business objectives and technical execution — transforming complex requirements into flawless, tested software. 1 year experience · 10+ projects delivered.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
            <a
              href="/Harshad_Shinde_resume_.pdf"
              download="Harshad_Shinde_Resume.pdf"
              className="btn btn-resume"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <i className="fa-solid fa-file-arrow-down"></i>
              Resume
            </a>
          </div>
        </div>

        <div className="hero-visual fade-up"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: '1200px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
          <div style={{
            width: '100%',
            maxWidth: '380px',
            height: '520px',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '40px',
            transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
            transition: 'transform 0.1s ease-out',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
              backgroundImage: 'url("/hero_photo.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.9,
              transform: `translate(${tilt.x * 0.5}px, ${tilt.y * 0.5}px) scale(1.1)`,
              transition: 'transform 0.1s ease-out'
            }}></div>

            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))' }}></div>

            <div className="floating" style={{
              position: 'absolute', bottom: '2.5rem', left: '1.5rem', right: '1.5rem', zIndex: 1,
              padding: '1.5rem',
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: '24px', border: '1px solid var(--border-color)',
              textAlign: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', lineHeight: '0.9', color: 'var(--text-primary)' }}>
                Focused<br />QA Strategy
              </h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
