import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  useScrollReveal();

  return (
    <section id="contact" className="bg-alt">
      <div className="container">
        <div className="section-header fade-up">
          <h2>Let's <span className="accent-text">Connect</span></h2>
        </div>

        <div className="contact-box fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '2.5rem' }}>

          <div className="contact-info">
            <h3 style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', marginBottom: '1.25rem', lineHeight: '1.05', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Have an idea or need <span className="accent-text">flawless execution?</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: '1.75' }}>
              Whether you need strategic business analysis or rigorous quality assurance, I'm available for freelance projects and full-time opportunities.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { icon: 'fa-solid fa-envelope', label: 'harshadshinde0912@gmail.com', href: 'mailto:harshadshinde0912@gmail.com' },
                { icon: 'fa-brands fa-linkedin', label: 'linkedin.com/in/harshad-shinde', href: 'https://www.linkedin.com/in/harshad-shinde-6b3097257', external: true },
              ].map(({ icon, label, href, external }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)', color: 'var(--accent-primary)', flexShrink: 0 }}>
                    <i className={icon}></i>
                  </div>
                  <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} style={{ fontWeight: '500', color: 'var(--text-primary)', textDecoration: 'none', wordBreak: 'break-all', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
                    {label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))', gap: '1.25rem' }}>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <input type="email" placeholder="Email Address" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
