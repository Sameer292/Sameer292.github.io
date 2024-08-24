
let changer;
let running = 0;
document.querySelector(".start").addEventListener("click", () => {
  if (running === 0) {
    changer = setInterval(changeRandomcolor, 1000);
    running = 1;
  }
});
function changeRandomcolor() {
  console.log("started");

  const r = getRandomInt(255);
  const g = getRandomInt(255);
  const b = getRandomInt(255);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

document.querySelector(".stop").addEventListener("click", () => {
  if (running === 1) {
    clearInterval(changer);
    running = 0;
  }
});