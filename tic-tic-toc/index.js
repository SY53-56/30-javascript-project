const boxes = document.querySelectorAll(".tic-box");
const result = document.querySelector(".status")
let currentPlayer = "O";
let board = Array(9).fill("");
let gameActive = false;
let p1Element, p2Element, player1Name, player2Name;

function startGame() {
  p1Element = document.querySelector("#p1");
  p2Element = document.querySelector("#p2");
  player1Name = p1Element.value.trim();
  player2Name = p2Element.value.trim();

  if (!player1Name || !player2Name) {
    alert("दोनों खिलाड़ियों के नाम डालें");
    return;
  }

  gameActive = true;
  currentPlayer = "O";
  board.fill("");
  boxes.forEach(box => box.textContent = "");
  const h1 =document.createElement("h1")
  h1.textContent = currentPlayer
    currentPlayer = currentPlayer === "O" ? "X" : "O";
    h1.style.color ="black"
    box.appendChild(h1)
  updateHighlight();
  result.textContent = `${player1Name}'s turn (O)`;
}

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (!gameActive || board[index] !== "") return;

    board[index] = currentPlayer;
    box.textContent = currentPlayer;

    if (checkWin()) {
      gameActive = false;
      result.textContent = currentPlayer === "O" ? `${player1Name} Wins!` : `${player2Name} Wins!`;
      return;
    }

    if (!board.includes("")) {
      gameActive = false;
      result.textContent = "Draw!";
      return;
    }

    currentPlayer = currentPlayer === "O" ? "X" : "O";
    updateHighlight();
  });
});

function updateHighlight() {
  if (currentPlayer === "O") {
    p1Element.classList.add("show");
    p2Element.classList.remove("show");
    result.textContent = `${player1Name}'s turn (O)`;
  } else {
    p2Element.classList.add("show");
    p1Element.classList.remove("show");
    result.textContent = `${player2Name}'s turn (X)`;
  }
}

function checkWin() {
  const winConditions = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // cols
    [0,4,8],[2,4,6]          // diagonals
  ];

  return winConditions.some(condition => {
    const [a,b,c] = condition;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function resetGame() {
  board.fill("");
  boxes.forEach(box => box.textContent = "");
  gameActive = false;
  result.textContent = "";
  p1Element.classList.remove("show");
  p2Element.classList.remove("show");
}
