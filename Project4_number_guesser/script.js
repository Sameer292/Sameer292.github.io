const randVal = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector("button");
const input = document.querySelector("#inp");
let lives = 10;
const wrongguess = document.querySelector(".wrongguess");

document.querySelector(".rem").innerHTML = lives;
submit.addEventListener("click", () => {
  if (lives <= 0) {
    gameOver();
  } else {
    if (parseInt(input.value) > 100 || parseInt(input.value) < 0) {
      alert("Please enter a number between 1-100");
    } else if (parseInt(input.value) === randVal) {
      alert("Congrats number matched");
      location.reload()
    } else {
      lives--;
      document.querySelector(".rem").innerHTML = lives;
      const wrongGuesses = document.createElement("div");
      wrongGuesses.innerText = input.value;
      wrongGuesses.classList.add("guesses");
      wrongguess.appendChild(wrongGuesses);

      if(lives>0){

          if (parseInt(input.value) < randVal) {
              alert("Incorrect! Guess higher");
            } else {
                alert("Incorrect! Guess lower");
            }
      }
      else{
        gameOver();
      }
    }
  }
});

function gameOver() {
  alert("Game over!!! You lose");
  location.reload();
}
