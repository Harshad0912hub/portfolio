import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact'];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">

          {/* Logo */}
          <div className="logo" style={{ textTransform: 'capitalize' }}>
            Harshad <span>Shinde</span>
          </div>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="nav-actions">
            <a href="mailto:harshadshinde0912@gmail.com" className="nav-email">
              <i className="fa-solid fa-envelope"></i>
              <span className="hide-mobile">harshadshinde0912@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/harshad-shinde-6b3097257"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-linkedin"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              style={{ background: 'none', border: 'none', fontSize: '1.25rem', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', transition: 'color 0.3s' }}
            >
              <i className={theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'}></i>
            </button>
            {/* Hamburger — only visible on mobile */}
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu}></div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="logo" style={{ textTransform: 'capitalize', fontSize: '1.8rem' }}>
            Harshad <span>Shinde</span>
          </span>
          <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav className="mobile-nav-links">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="mobile-nav-link"
              style={{ animationDelay: `${i * 0.05}s` }}
              onClick={closeMenu}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <a href="mailto:harshadshinde0912@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <i className="fa-solid fa-envelope" style={{ color: 'var(--accent-primary)' }}></i>
            harshadshinde0912@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/harshad-shinde-6b3097257" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <i className="fa-brands fa-linkedin" style={{ color: 'var(--accent-primary)' }}></i>
            linkedin.com/in/harshad-shinde
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
