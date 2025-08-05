


/*
 const value1 = document.querySelectorAll(".value1");
  const value2 = document.querySelectorAll(".value2");
  const tic = document.querySelectorAll(".tic-box")
  console.log

  // Example: hide both on click
value1.forEach((items)=>{
  items.addEventListener("click",function(){
       value2.forEach((v)=>{
        v.style.display = 'none'
       })
  })
})

value2.forEach((items)=>{
    items.addEventListener("click",function(){
        value1.style.display = "none"
    })
})*/

/*
function playerRound() {
  const player1 = document.querySelector(".player1");
  const player2 = document.querySelector(".player2");

  const p = document.createElement("p");

  if (player1) {
    p.textContent = "Player 1 turn now";

  } else if (player2) {
    p.textContent = "Player 2 turn now";
  } else {
    p.textContent = "No player found";
  }

  const container = document.querySelector(".tic");
  if (container) {
    container.appendChild(p);
  }
}

playerRound()*/
const player1Btn = document.querySelector(".player1");
  const player2Btn = document.querySelector(".player2");
  const container = document.querySelector(".tic");
  const round = document.querySelector(".game")
const value1 = document.querySelectorAll(".value1");
const value2 = document.querySelectorAll(".value2")
const allBox = document.querySelectorAll(".tic-box")

let currentPlayer = "player1"; // start with player1

value1.forEach((btn) => {
  btn.addEventListener("click", function () {
    const box = btn.closest(".tic-box");
    const value2 = box.querySelector(".value2");

    if (value2) {
      value2.style.display = "none";
    }

   
  });
});

value2.forEach((btn) => {
  btn.addEventListener("click", function () {
    const box = btn.closest(".tic-box");
    const value1 = box.querySelector(".value1");

    if (value1) {
      value1.style.display = "none";
    }

  });
});

  

allBox.forEach((items)=>{
  items.addEventListener("click",()=>{
  if (items.classList.contains("played")) return;
  if(currentPlayer==="player1"){
    items.style.backgroundColor  = "red"
    player1Btn.style.backgroundColor = "red"
    currentPlayer= "player2"
    round.textContent ="player1 turn"
  }else{
    items.style.backgroundColor = "green"
    currentPlayer= "player1"
    player2Btn.style.backgroundColor = "green"
       round.textContent ="player2 turn"
  }
  })
})