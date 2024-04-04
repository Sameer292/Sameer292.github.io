let boxes = document.querySelectorAll(".boxes");
let res = document.querySelectorAll(".winner");
let playagain = document.querySelector(".play-again");
let turn = 0;
let gameOver = false;

boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.style.cursor = "pointer";
    box.style.color = "white";
    if (!gameOver) {
      box.style.backgroundColor = "#022B3A";
    }
  });

  box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "";
  });

  box.addEventListener("click", () => {
    if (turn == 0 && box.innerHTML === "" && gameOver === false) {
      box.innerText = "X";
      turn = 1;
    } else if (turn == 1 && box.innerHTML === "" && gameOver === false) {
      box.innerText = "O";
      turn = 0;
    }
    checkWinner();
  });
});

playagain.addEventListener("click", () => {
  gameOver = false;
  boxes.forEach((box) => {
    box.innerText = "";
  });
  res.forEach((result) => {
    result.innerText = "";
  });
  playagain.style.display = "none";
});

function checkWinner() {
  let boardempty = 0;
  const boxes = document.querySelectorAll(".boxes");
  const board = Array.from(boxes).map((box) => box.textContent.trim());
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c] &&
      gameOver == false
    ) {
      gameover(board[a]);
    }
  }
  board.forEach((boards) => {
    if (boards === "") {
      boardempty++;
    }
  });
  if (boardempty === 0) {
    draw();
  }

  return false;
}

function gameover(win) {
  res.forEach((result) => {
    result.innerText = win;
  });
  playagain.style.display = "initial";
  turn = 0;
  gameOver = true;
}

function draw(){
    res.forEach((result) => {
        result.innerText = "!!!";
      });
      playagain.style.display = "initial";
      turn = 0;
      gameOver = true;
}
