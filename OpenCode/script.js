document.addEventListener('DOMContentLoaded', () => {

  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.header__link');
  const statNumbers = document.querySelectorAll('.hero__stat-number');
  const contactForm = document.getElementById('contactForm');
  const revealElements = document.querySelectorAll('[data-reveal]');

  /* ── Scroll Reveal ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  revealElements.forEach((el) => revealObserver.observe(el));

  /* ── Mobile Menu ── */
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('header__nav--open');
    menuToggle.classList.toggle('header__toggle--active');
    menuToggle.setAttribute('aria-expanded', isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
  });

  const closeMenu = () => {
    nav.classList.remove('header__nav--open');
    menuToggle.classList.remove('header__toggle--active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  nav.addEventListener('click', (e) => {
    if (e.target === nav) closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('header__nav--open')) {
      closeMenu();
    }
  });

  /* ── Header Scroll Effect ── */
  const onScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    updateActiveLink();
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Smooth Scroll for Nav Links ── */
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Active Nav Link on Scroll ── */
  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (scrollPos >= top && scrollPos < bottom) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('header__link--active', link.getAttribute('href') === '#' + current);
    });
  }

  /* ── Counter Animation ── */
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach((el) => counterObserver.observe(el));

  function animateCounter(el, target) {
    let current = 0;
    const steps = 50;
    const increment = target / steps;
    const suffix = target === 98 ? '%' : '+';

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.round(current) + suffix;
    }, 28);
  }

  /* ── Form Validation ── */
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isValid = true;

    clearErrors();

    if (!name.value.trim()) {
      showError(name, 'Por favor ingresá tu nombre');
      isValid = false;
    }

    if (!email.value.trim()) {
      showError(email, 'Por favor ingresá tu correo electrónico');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      showError(email, 'Ingresá un correo electrónico válido');
      isValid = false;
    }

    if (!message.value.trim()) {
      showError(message, 'Por favor escribí un mensaje');
      isValid = false;
    }

    if (isValid) {
      showSuccess();
      contactForm.reset();
    }
  });

  function showError(input, msg) {
    const group = input.closest('.form__group');
    input.classList.add('form__input--error');
    group.querySelector('.form__error').textContent = msg;
  }

  function clearErrors() {
    document.querySelectorAll('.form__input--error').forEach((el) => {
      el.classList.remove('form__input--error');
    });
    document.querySelectorAll('.form__error').forEach((el) => {
      el.textContent = '';
    });
    const existing = contactForm.querySelector('.form__success');
    if (existing) existing.remove();
  }

  function showSuccess() {
    const msg = document.createElement('div');
    msg.className = 'form__success';
    msg.innerHTML = '<i class="fa-solid fa-circle-check" aria-hidden="true"></i> Mensaje enviado con éxito. Te contactaremos pronto.';
    contactForm.appendChild(msg);
    setTimeout(() => msg.remove(), 5000);
  }

});
