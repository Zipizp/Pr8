const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandomHexColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hex.length);
    color += hex[index];
  }
  return color;
}

const btn = document.getElementById("btn");
const colorDisplay = document.getElementById("color");

btn.addEventListener("click", function () {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorDisplay.textContent = newColor;
});
