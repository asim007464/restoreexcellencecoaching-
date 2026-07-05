document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('pageLoader');
  const wrap = document.getElementById('pageWrap');

  // Skeleton loader  hide after brief delay + images started loading
  const hideLoader = () => {
    if (loader) loader.classList.add('hidden');
    if (wrap) wrap.classList.add('loaded');
  };
  setTimeout(hideLoader, 900);
  window.addEventListener('load', hideLoader);

  // Header shadow on scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));

  // Smooth anchor scroll offset for fixed header
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = 120;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Animated number counters (count up on scroll)
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const duration = 2000;
    const startTime = performance.now();

    const formatNum = (n) => {
      const fixed = n.toFixed(decimals);
      // add thousands separators for whole numbers
      const parts = fixed.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');
    };

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // easeOutCubic for a smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = formatNum(target * eased);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = formatNum(target);
      }
    };
    requestAnimationFrame(step);
  };

  const counterBar = document.getElementById('counterBar');
  if (counterBar) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.count').forEach(animateCount);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counterObserver.observe(counterBar);
  }
});
