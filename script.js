"use strict";

let input = document.querySelector(".input"),
  text = document.querySelector("p"),
  worm = document.querySelector(".worm"),
  airplane = document.querySelector(".airplane"),
  buttonStart = document.querySelector(".button-start"),
  buttonReset = document.querySelector(".button-reset"),
  flyInterval,
  flyAnimate,
  wormDown,
  idInterval,
  animate,
  count = 0;

flyAnimate = function () {
  flyInterval = requestAnimationFrame(flyAnimate);
  count++;
  if (count < 450) {
    worm.style.left = count + "px";
    airplane.style.left = count + "px";
  } else {
    cancelAnimationFrame(flyInterval);
  }
};

animate = true;
buttonStart.addEventListener("click", function () {
  if (animate) {
    flyInterval = requestAnimationFrame(flyAnimate);
    animate = false;
  } else {
    animate = true;
    cancelAnimationFrame(flyInterval);
  }
});
buttonReset.addEventListener("click", function () {
  count = 0;
  worm.style.left = count + "px";
  airplane.style.left = count + "px";
});
