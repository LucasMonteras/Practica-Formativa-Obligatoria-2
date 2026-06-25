const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú de navegación');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const track = document.querySelector('.testimonial-track');
const cards = [...document.querySelectorAll('.testimonial-card')];
let currentSlide = 0;

function visibleCards() {
  if (window.innerWidth <= 520) return 1;
  if (window.innerWidth <= 800) return 2;
  return 3;
}

function updateSlider(direction = 0) {
  const maxSlide = Math.max(0, cards.length - visibleCards());
  currentSlide = Math.min(Math.max(currentSlide + direction, 0), maxSlide);
  const gap = 18;
  const cardWidth = cards[0].getBoundingClientRect().width + gap;
  track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
}

document.querySelector('.next').addEventListener('click', () => updateSlider(1));
document.querySelector('.prev').addEventListener('click', () => updateSlider(-1));
window.addEventListener('resize', () => updateSlider());

document.querySelector('.contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const feedback = document.querySelector('.form-feedback');
  feedback.textContent = '¡Gracias! Recibimos tu consulta y te responderemos pronto.';
  event.currentTarget.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();
