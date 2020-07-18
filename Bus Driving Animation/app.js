const surface = document.querySelector('.surface');

const animateSurface = surface.animate([{ transform: 'translateX(-740px)' }], {
  duration: 2000,
  iterations: Infinity,
});

const car = document.querySelector('.car');

const animateCar = car.animate(
  [
    { transform: 'translateY(-2px)' },
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-2px)' },
  ],
  {
    duration: 1000,
    iterations: Infinity,
  }
);

car.addEventListener('click', () => {
  if (car.firstElementChild.alt === 'car') {
    car.firstElementChild.src = './assets/Img_05.png';
    car.firstElementChild.alt = 'car1';
  } else {
    car.firstElementChild.src = './assets/Img_06.png';
    car.firstElementChild.alt = 'car';
  }
});

surface.addEventListener('mousedown', () => {
  animateSurface.pause();
  animateCar.pause();
});

surface.addEventListener('mouseup', () => {
  animateSurface.play();
  animateCar.play();
});
