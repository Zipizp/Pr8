const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.getElementById("btn");
const colorText = document.querySelector(".color");

button.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[randomIndex];
  document.body.style.backgroundColor = selectedColor;
  colorText.textContent = selectedColor; 
});