// heart btn js

let favCount = 0;
const countDisplay = document.getElementById("favCount");
const hearts = document.querySelectorAll(".heart");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    favCount++;
    countDisplay.textContent = favCount;
  });
});
