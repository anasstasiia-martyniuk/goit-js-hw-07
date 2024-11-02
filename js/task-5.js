function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget");
const span = widget.querySelector(".color");
const btn = widget.querySelector(".change-color");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
      const randomColor = getRandomHexColor();
      body.style.backgroundColor = randomColor;
      span.textContent = randomColor;
  });