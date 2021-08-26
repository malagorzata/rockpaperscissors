"use strict";
let winner ="computer";
// let computerChoice = "scissors";
// let userChoice = "paper";
let userChoice
let computerRandom

let random = Math.floor(Math.random() * 3) + 1

window.addEventListener("DOMContentLoaded", start);



function start() {
console.log("start");
getPlayerChoice();
}

function getPlayerChoice() {
    console.log("playerChoice");
    document.querySelector(".scissors").addEventListener("click", chooseScissors);   
    document.querySelector(".paper").addEventListener("click", choosePaper);
    document.querySelector(".rock").addEventListener("click", chooseRock);

}

function chooseRock() {
    console.log("chooseRock");
    userChoice = "rock";
    getComputerChoice();
}

function chooseScissors() {
    console.log("chooseScissors");
    userChoice = "scissors"
    getComputerChoice();
}

function choosePaper() {
    console.log("choosePaper");
    userChoice = "paper"
    getComputerChoice();
}

function getComputerChoice() {
    console.log("getComputerChoice");
      document.querySelector("#player2").classList.add("shake");
      document.querySelector("#player1").classList.add("shake");
      document.querySelector("#player1").addEventListener("animationend", showAnimations);
     
}

function showAnimations() {
    console.log("animations");

    if (userChoice === "paper") {
        console.log("paper");
        document.querySelector("#player1").classList.remove("shake");
        document.querySelector("#player1").classList.add("paper");

    } else if (userChoice === "scissors") {
        console.log("scissors");

        document.querySelector("#player1").classList.remove("shake");
        document.querySelector("#player1").classList.add("scissors");

    } else {
        console.log("rock");
        document.querySelector("#player1").classList.remove("shake");
        document.querySelector("#player1").classList.add("rock");

    }
    if (random === 1) {
        document.querySelector("#player2").classList.remove("shake");
        document.querySelector("#player2").classList.add("paper");
        document.querySelector("#player2").addEventListener("animationend", winnerResult);

      }
  
      if (random === 2) {
        document.querySelector("#player2").classList.remove("shake");
        document.querySelector("#player2").classList.add("rock");
        document.querySelector("#player2").addEventListener("animationend", winnerResult);

      }
      if (random === 3) {
        document.querySelector("#player2").classList.remove("shake");
        document.querySelector("#player2").classList.add("scissors");
        document.querySelector("#player2").addEventListener("animationend", winnerResult);

      }



}


function winnerResult() {

    if (random === userChoice) {
        document.querySelector("#draw").classList.remove("hidden");
        setTimeout(again, 1500);

    }
    if (random === 2 && userChoice === "paper") {
        document.querySelector("#win").classList.remove("hidden");
        setTimeout(again, 1500);

    }
    if (random === 2 && userChoice === "scissors") {
        document.querySelector("#lose").classList.remove("hidden");
        setTimeout(again, 1500);

    }
    if (random === 1 && userChoice === "scissors") {
        document.querySelector("#win").classList.remove("hidden");
        setTimeout(again, 1500);

    }
    if (random === 1 && userChoice === "rock") {
        document.querySelector("#lose").classList.remove("hidden");
        setTimeout(again, 1500);

    }
    if (random ===  3 && userChoice === "rock"){
        document.querySelector("#win").classList.remove("hidden");
        setTimeout(again, 1500);

    }
    if (random === 3 && userChoice === "paper") {
        document.querySelector("#lose").classList.remove("hidden");
        setTimeout(again, 1500);

    }
  }
  

  function again() {
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
  
    document.querySelector("#player2").classList.remove("paper", "scissors", "rock");
    document.querySelector("#player1").classList.remove("paper", "scissors", "rock");
  }
  