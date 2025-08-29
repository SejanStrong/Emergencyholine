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
let coins = 100;
const coinCount = document.getElementById("coin-count");
const callHistory = document.getElementById("call-history");
const clearBtn = document.getElementById("clear-history");

function updateCoins() {
  coinCount.textContent = coins;
}

document.querySelectorAll(".call-btn").forEach((button) => {
  button.addEventListener("click", function () {
    let serviceName = this.dataset.name;
    let serviceNumber = this.dataset.number;

    if (coins >= 20) {
      coins -= 20;
      updateCoins();
      alert(`Calling ${serviceName} at ${serviceNumber}`);

      let entry = document.createElement("div");
      entry.className = "flex justify-between bg-white shadow p-2 rounded";
      entry.innerHTML = `<span>${serviceName} - ${serviceNumber}</span> 
                         <span>${new Date().toLocaleTimeString()}</span>`;
      callHistory.prepend(entry);
    } else {
      alert("Not enough coins to make a call!");
    }
  });
});

clearBtn.addEventListener("click", () => {
  callHistory.innerHTML = "";
});

let copyCount = 0;

document.getElementsByClass("copyBtn").addEventListener("click", function () {
  let hotlineText = document.getElementsByClass("hotline-number").innerText;

  navigator.clipboard.writeText(hotlineText).then(() => {
    alert("Hotline number copied!");

    copyCount++;
    document.getElementById("copyCount").innerText = copyCount;
  });
});
