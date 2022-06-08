let position = 0; // Смещение от левого края
let counter = 0;
const sliderLineElement = document.querySelector('.slider-line');
const sliderButtonNextElement = document.querySelector('.slider__button_type_next');
const sliderButtonPrevElement = document.querySelector('.slider__button_type_prev');
const sliderImageElements = document.querySelectorAll('.slider__image');
const sliderPointElements = document.querySelectorAll('.slider__point');

const lengthSlider = (sliderImageElements.length - 1) * 100;


const nextSlide = () => {
  counter++;
  if (position === -lengthSlider) {
    sliderPointElements[counter - 1].classList.remove('slider__point_active');
    position += lengthSlider;
    sliderLineElement.style.left = `${position}%`;
    counter = 0;
    sliderPointElements[counter].classList.add('slider__point_active');
  } else {
    position -= 100;
    sliderLineElement.style.left = `${position}%`;
    sliderPointElements[counter].classList.add('slider__point_active');
    sliderPointElements[counter - 1].classList.remove('slider__point_active');
  }
}

const prevSlide = () => {
  counter--;
  if (position === 0) {
    sliderPointElements[counter + 1].classList.remove('slider__point_active');
    position -= lengthSlider;
    sliderLineElement.style.left = `${position}%`;
    counter = sliderPointElements.length - 1;
    sliderPointElements[counter].classList.add('slider__point_active')
  } else {
    position += 100;
    sliderLineElement.style.left = `${position}%`;
    sliderPointElements[counter].classList.add('slider__point_active');
    sliderPointElements[counter + 1].classList.remove('slider__point_active');
  }
}

sliderButtonNextElement.addEventListener('click', nextSlide);
sliderButtonPrevElement.addEventListener('click', prevSlide);