// Toggle navigation menu on small screens
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('nav');
menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Scroll to top button
const scrollToTopButton = document.querySelector('#scroll-to-top-button');
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Newsletter form submission
const newsletterForm = document.querySelector('#newsletter form');
newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = newsletterForm.querySelector('input[type="email"]').value;
  console.log(`Submitting newsletter subscription for email address: ${email}`);
});


