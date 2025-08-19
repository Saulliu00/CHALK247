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

  // Navigation scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const nav = document.querySelector('.site-nav');
    const currentScroll = window.pageYOffset;
    
    if (nav) {
      if (currentScroll > 100) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
    
    lastScroll = currentScroll;
  });

  // Intersection observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  // Observe all feature cards and posts
  document.querySelectorAll('.feature, .post-preview').forEach(el => {
    observer.observe(el);
  });
});

// Add CSS for chalk particle
const style = document.createElement('style');
style.textContent = `
  .chalk-particle {
    position: fixed;
    background: #f5f5f0;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
  }
  
  @keyframes dust-fall {
    0% {
      opacity: 0.6;
      transform: translate(0, 0) scale(1);
    }
    100% {
      opacity: 0;
      transform: translate(20px, 40px) scale(0.3);
    }
  }
  
  .site-nav.scrolled {
    background: rgba(26, 26, 26, 0.98);
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.8);
  }
  
  .fade-in {
    animation: fadeInUp 0.6s ease forwards;
  }
`;
document.head.appendChild(style);