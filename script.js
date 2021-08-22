"use strict";
const total = 50;
const text = document.querySelector("#text");
const worm = document.querySelector(".worm");
let input = document.querySelector(".input"),
  airplane = document.querySelector(".airplane"),
  buttonStart = document.querySelector(".button-start"),
  buttonReset = document.querySelector(".button-reset"),
  flyInterval,
  flyAnimate,
  wormDown,
  idInterval,
  count = 0;

const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) {
      timeFraction = 1;
    }
    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

animate({
  duration: 1000,
  timing(timeFraction) {
    return timeFraction;
  },
  draw(progress) {
    worm.style.transform = `translateX(${progress * (total + 100) - 100}%)`;
  },
});
