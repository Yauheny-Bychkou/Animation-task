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
function debounce(func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}

const returnedFunction = debounce(function (e) {
  let target = e.target;
  text.textContent = target.value;
}, 300);

input.addEventListener("input", returnedFunction);
window.addEventListener("resize", returnedFunction);
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
