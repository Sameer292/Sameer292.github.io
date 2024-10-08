let randVal = Math.floor(Math.random() * 100 + 1);
const submit = document.querySelector("button");
const input = document.querySelector("#inp");
let lives = 10;
const wrongguess = document.querySelector(".wrongguess");
const restart = document.querySelector(".restart");
document.querySelector(".rem").innerHTML = lives;


submit.addEventListener("click", () => {
    const val = parseInt(input.value);
  if (lives <= 0) {
    gameOver();
  } else {
    if (isInputinvalid(val)) {
      alert("Please enter a number between 1-100");
    } else if (val === randVal) {
      alert("Congrats number matched");
      newGame()
    } else {
      wrongguesser(val);
    }
  }
});

restart.addEventListener("click", () => {
  newGame()
});

function gameOver() {
  alert(`Game over!!! You lose. The number was ${randVal}`);
  newGame()
}

function isInputinvalid(val) {
  if (val > 100 || val < 0 || isNaN(val)) {
    return true;
}
}

function wrongguesser(val) {
  lifesucker();
  displayprevguesses();
  
  if (lives > 0) {
    highorlow(val);
} else {
    gameOver();
}
}

function highorlow(val) {
    if (val < randVal) {
    alert("Incorrect! Guess higher");
  } else {
      alert("Incorrect! Guess lower");
  }
}
function lifesucker() {
  lives--;
  document.querySelector(".rem").innerHTML = lives;
}

function displayprevguesses() {
  const wrongGuesses = document.createElement("div");
  wrongGuesses.innerText = input.value;
  wrongGuesses.classList.add("guesses");
  wrongguess.appendChild(wrongGuesses);
}


function newGame()
{
    lives = 10
    input.value = ""
    randVal = Math.floor(Math.random() * 100 + 1);
    wrongguess.innerHTML="Previous guesses: "
    document.querySelector(".rem").innerHTML = lives;
}