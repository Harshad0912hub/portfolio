import { useEffect } from 'react';

const useScrollReveal = (options = { threshold: 0.15 }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, options);

    const elements = document.querySelectorAll('.fade-up, .fade-in, .fade-in-right');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [options.threshold]);
};

export { useScrollReveal };
export default useScrollReveal;
