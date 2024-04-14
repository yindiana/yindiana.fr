let currentIndex = 0;

function showSlide(index) {
  const slider = document.getElementById('carousel-container__slider');
  const slideWidth = document.querySelector('.carousel-container__slider-image').clientWidth;
  slider.style.transform = `translateX(${-index * slideWidth}px)`;
  currentIndex = index;
}

function nextSlide() {
  const totalSlides = document.querySelectorAll('.carousel-container__slider-image').length;
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  const totalSlides = document.querySelectorAll('.carousel-container__slider-image').length;
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}
