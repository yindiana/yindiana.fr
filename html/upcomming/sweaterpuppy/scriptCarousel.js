let currentIndex = 0;

function showSlide(index) {
  const slider = document.getElementById('image-slider');
  const slideWidth = document.querySelector('.carousel-image').clientWidth;
  slider.style.transform = `translateX(${-index * slideWidth}px)`;
  currentIndex = index;
}

function nextSlide() {
  const totalSlides = document.querySelectorAll('.carousel-image').length;
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  const totalSlides = document.querySelectorAll('.carousel-image').length;
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}
