const img = document.querySelectorAll(".img");
const btnPrevious = document.querySelector(".btn-left");
const btnNext = document.querySelector(".btn-right");
const dots = document.querySelectorAll(".dot");

let index = 0;
let interval;

function slide() {
  img[index].classList.add("img-visible");
  dots[index].classList.add("active-input");
  restartInterval();
}

function hideSlide() {
  img[index].classList.remove("img-visible");
  dots[index].classList.remove("active-input");
}

function nextSlide() {
  hideSlide();

  index++;

  if (index >= img.length) {
    index = 0;
  }

  slide();
}

btnNext.addEventListener("click", nextSlide);

function previousSlide() {
  hideSlide();

  index--;

  if (index < 0) {
    index = img.length - 1;
  }

  slide();
}

btnPrevious.addEventListener("click", previousSlide);

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    hideSlide();
    index = dot.getAttribute("data-index");
    slide();
  });
});

function switchingInterval() {
  interval = setInterval(() => nextSlide(), 5000);
}

function restartInterval() {
  clearInterval(interval);
  switchingInterval();
}

switchingInterval();
slide();
