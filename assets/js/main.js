// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Chalk dust effect on click
  document.addEventListener('click', function(e) {
    createChalkDust(e.clientX, e.clientY);
  });

  function createChalkDust(x, y) {
    const particle = document.createElement('div');
    particle.className = 'chalk-particle';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    // Random size and animation duration
    const size = Math.random() * 4 + 2;
    const duration = Math.random() * 1 + 0.5;
    
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.animation = `dust-fall ${duration}s ease-out`;
    
    document.body.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
      particle.remove();
    }, duration * 1000);
  }