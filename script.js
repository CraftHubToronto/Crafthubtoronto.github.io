const slides = Array.from(document.querySelectorAll('.slideshow-slide'));
const dots = Array.from(document.querySelectorAll('.dot'));
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentSlideIndex = 0;

function showSlide(index) {
  if (!slides.length) return;

  currentSlideIndex = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === currentSlideIndex;
    slide.classList.toggle('active', isActive);
  });

  dots.forEach((dot, dotIndex) => {
    const isActive = dotIndex === currentSlideIndex;
    dot.classList.toggle('active', isActive);
    dot.setAttribute('aria-current', String(isActive));
  });
}

prevButton?.addEventListener('click', () => {
  showSlide(currentSlideIndex - 1);
});

nextButton?.addEventListener('click', () => {
  showSlide(currentSlideIndex + 1);
});

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const targetIndex = Number(dot.dataset.index);
    if (!Number.isNaN(targetIndex)) {
      showSlide(targetIndex);
    }
  });
});

showSlide(0);
