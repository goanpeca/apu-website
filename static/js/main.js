// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const track = document.getElementById('carouselTrack');
const indicators = document.getElementById('carouselIndicators');

// Create indicators
for (let i = 0; i < totalSlides; i++) {
  const indicator = document.createElement('div');
  indicator.className = 'indicator';
  if (i === 0) indicator.classList.add('active');
  indicator.onclick = () => goToSlide(i);
  indicators.appendChild(indicator);
}

function updateCarousel() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update indicators
  document.querySelectorAll('.indicator').forEach((ind, idx) => {
    ind.classList.toggle('active', idx === currentSlide);
  });
}

function moveCarousel(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  updateCarousel();
}

// Auto-play carousel
setInterval(() => moveCarousel(1), 5000);

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  hamburger.setAttribute(
    'aria-label',
    isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
  );
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});
