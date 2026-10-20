// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false
});

// Animations
sr.reveal('.reveal-type', { delay: 500, origin: 'top' });
sr.reveal('.reveal-sub', { delay: 800 });
sr.reveal('.story-text', { origin: 'left' });
sr.reveal('.glass-card', { origin: 'right', delay: 400 });
sr.reveal('.pillar-card', { interval: 200 });
sr.reveal('.section-tag', { origin: 'left', distance: '20px' });

// Navbar scroll effect
window.onscroll = function() {
    const nav = document.querySelector('.glass-nav');
    if (window.pageYOffset > 50) {
        nav.style.background = "rgba(5, 5, 5, 0.95)";
        nav.style.padding = "15px 8%";
    } else {
        nav.style.background = "rgba(5, 5, 5, 0.8)";
        nav.style.padding = "20px 8%";
    }
};

  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');

  mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('open');
  });

  // Closes menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('active');
    mobileMenu.classList.remove('open');
  }));