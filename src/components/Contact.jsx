import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  useScrollReveal();
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");
    
    const formData = new FormData(event.target);

    // Web3Forms Access Key
    formData.append("access_key", "1b0f35a8-9b21-4ac5-a235-bca33a82f016");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully! I will get back to you soon.");
        event.target.reset();
      } else {
        console.error("Error", data);
        setStatus("Failed to send message please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("An error occurred. Please try again later.");
    }
    
    setIsSubmitting(false);
  };

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

          <form className="contact-form" onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))', gap: '1.25rem' }}>
              <input type="text" name="First Name" placeholder="First Name" required />
              <input type="text" name="Last Name" placeholder="Last Name" required />
            </div>
            <input type="email" name="Email" placeholder="Email Address" required />
            <textarea name="Message" rows="5" placeholder="Your Message" required></textarea>
            
            <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: '100%', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer', transition: 'all 0.3s ease' }}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            <span style={{ display: 'block', textAlign: 'center', marginTop: '0.5rem', color: status.includes("successfully") ? 'var(--accent-primary)' : 'var(--text-secondary)', fontSize: '0.95rem', minHeight: '1.5rem', transition: 'opacity 0.3s', opacity: status ? 1 : 0 }}>{status}</span>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
