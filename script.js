"use strict";
window.addEventListener("DOMContentLoaded", start);
let winner ="computer";
let computerChoice = "paper";
let userChoice = "scissors";



function start() {
console.log("start");
getPlayerChoice();
}

function getPlayerChoice() {
    console.log("playerChoice");
    // document.querySelector("button.rock").addEventListener("click", chooseRock);
    // document.querySelector("button.paper").addEventListener("click", choosePaper);
    document.querySelector("button.scissors").addEventListener("click", chooseScissors);



}

function chooseRock() {
    console.log("chooseRock");
    getComputerChoice();
}

function chooseScissors() {
    console.log("chooseRock");
    getComputerChoice();
}

function choosePaper() {
    console.log("chooseRock");
    getComputerChoice();
}

function getComputerChoice() {
    console.log("getComputerChoice");
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");

showAnimation();
  
}

function showAnimation() {
    console.log("animations");

    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player2").classList.remove("shake");

    if (userChoice === "rock") {
        document.querySelector("#player1").classList.add("rock");

    }

    if (userChoice === "paper") {
        document.querySelector("#player1").classList.add("paper");

    }
    if (userChoice === "scissors") {
        document.querySelector("#player1").classList.add("scissors");

    }

    // document.querySelector("#player1").classList.add("paper");
    // document.querySelector("#player2").classList.add("scissors");


    determinWinner();

}

function determinWinner() {
    console.log("winnter");
    if (winner === "computer") {
        showLose();
    } else if (winner === "user") {
        showWin();

    } else {
        showDraw();
    }

}

function showWin() {
    console.log("who won");


}

function showLose() {   
     console.log("who lost");


}

function showDraw() {
    console.log("draw");


}