"use strict";
/*
Введённый в поле текст должен отображаться внутри параграфа, но с задержкой в 300 мс.
При этом каждый введённый пользователем в поле символ сбрасывает предыдущий отложенный вызов и запускает новый.
Таким образом программа должна ожидать завершения ввода пользователя и только после этого изменять текст в <p></p>
*/
let input = document.querySelector(".input"),
  text = document.querySelector("p");

let wormDown = function () {
  let eventFunc = function (event) {
    text.textContent = input.value;
  };

  input.addEventListener("input", eventFunc);
};

let idInterval = setInterval(wormDown, 300);

/*
Написать любую анимацию, используя requestAnimationFrame и кнопку, активирующую её
Кнопка должна ставить анимацию на паузу и продолжать анимацию после повторного нажатия 
+ Добавить кнопку reset, которая будет возвращать анимацию в первоначальное состояние 
*/

let worm = document.querySelector(".worm"),
  airplane = document.querySelector(".airplane"),
  buttonStart = document.querySelector(".button-start"),
  buttonReset = document.querySelector(".button-reset"),
  count = 0;

let flyInterval;
let flyAnimate = function () {
  flyInterval = requestAnimationFrame(flyAnimate);
  count++;
  if (count < 450) {
    worm.style.left = count + "px";
    airplane.style.left = count + "px";
  } else {
    cancelAnimationFrame(flyInterval);
  }
};
let animate = false;
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
