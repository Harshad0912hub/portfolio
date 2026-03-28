import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
      <div className="container">
        <div className="logo" style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>
          H<span>.</span>S
        </div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontWeight: '500' }}>
          QA Engineer & Business Analyst
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <a href="https://www.linkedin.com/in/harshad-shinde-6b3097257" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}><i className="fa-brands fa-linkedin"></i></a>
          <a href="#" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}><i className="fa-brands fa-github"></i></a>
          <a href="mailto:harshadshinde0912@gmail.com" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}><i className="fa-solid fa-envelope"></i></a>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Harshad Shinde. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
