document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });

  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  const counterBar = document.getElementById('counterBar');
  const counts = document.querySelectorAll('.count');
  let counted = false;

  const animateCount = (el) => {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const duration = 1800;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = decimals ? value.toFixed(decimals) : Math.floor(value);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = decimals ? target.toFixed(decimals) : target;
    };
    requestAnimationFrame(tick);
  };

  if (counterBar && counts.length) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !counted) {
          counted = true;
          counts.forEach(animateCount);
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    counterObserver.observe(counterBar);
  }
});
