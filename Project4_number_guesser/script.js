const randVal = Math.floor(Math.random() * 100 + 1);
const submit = document.querySelector("button");
const input = document.querySelector("#inp");
let lives = 10;
const wrongguess = document.querySelector(".wrongguess");
const restart = document.querySelector(".restart");

document.querySelector(".rem").innerHTML = lives;
submit.addEventListener("click", () => {
  if (lives <= 0) {
    gameOver();
  } else {
    if (isInputinvalid()) {
      alert("Please enter a number between 1-100");
    } else if (parseInt(input.value) === randVal) {
      alert("Congrats number matched");
      location.reload();
    } else {
      wrongguesser();
    }
  }
});

restart.addEventListener("click", () => {
  location.reload();
});

function gameOver() {
  alert("Game over!!! You lose");
  location.reload();
}

function isInputinvalid() {
  if (parseInt(input.value) > 100 || parseInt(input.value) < 0 || isNaN(parseInt(input.value))) {
    return true;
  }
}

function wrongguesser() {
  lifesucker();
  displayprevguesses();

  if (lives > 0) {
    highorlow();
  } else {
    gameOver();
  }
}

function highorlow() {
  if (parseInt(input.value) < randVal) {
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
