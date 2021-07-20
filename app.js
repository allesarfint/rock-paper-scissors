/*
Problem: Make a rock paper scissors game which receives input from
the player, compares it to a randomly generated input from the
computer, stores data from five rounds and determiners the winner
based on which won more games, either the player or the computer.

Plan:
    -User interface: Web based interface
    -Data inputs: User selects from the webpage between rock, paper
    or scissor. Random selection from computer
    -Desired Outputs: A text announces each round winner and shows
    how many rounds each players have won. After five rounds display
    the winner and give the option to play again.
*/

let playerSelection = "",
    cpuSelection = "",
    playerWins = 0,
    cpuWins = 0,
    requiredWins = 5;

let playerScore = document.querySelector("#player-score");
let cpuScore = document.querySelector("#cpu-score");

const playerPlay = document.querySelector("#player-play");
const cpuPlay = document.querySelector("#cpu-play");

const scoreBoard = document.querySelector("#score-board");

const options = document.querySelectorAll(".option");

const reset = document.querySelector("#reset");

reset.addEventListener("click", function resetGame() {
    playerWins = 0;
    cpuWins = 0;
    playerPlay.textContent = "";
    playerPlay.classList.remove("winner", "loser", "draw")
    cpuPlay.textContent = "";
    cpuPlay.classList.remove("winner", "loser", "draw")
    scoreBoard.innerHTML = `
        <div id="player-score" class="score">
            PLAYER - 0
        </div>
        <div id="cpu-score" class="score">
            CPU - 0
        </div>`;
    playerScore = document.querySelector("#player-score");
    cpuScore = document.querySelector("#cpu-score");
})

options.forEach(option => option.addEventListener("click", function getPlayerSelection(e) {
    return playerSelection = e.target.id
}))

options.forEach(option => option.addEventListener("click", () => {
    if (playerWins === requiredWins || cpuWins === requiredWins) return
    cpuPlay.classList.remove("winner", "loser", "draw");
    playerPlay.classList.remove("winner", "loser", "draw");
    validateUserSelection();
    generateCpuSelection();
    selectRoundWinner();
    getGameWinner();
}))

function validateUserSelection() {
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {return}
    else {
        alert("Invalid input.");
        return false
    }
}

function generateCpuSelection() {
    const cpuOptions = ["rock", "paper", "scissors"];
    return cpuSelection = cpuOptions[Math.floor(Math.random() * cpuOptions.length)]
}

function selectRoundWinner() {
    if(playerSelection === "rock") {        
        playerPlay.textContent = "✊";
        if (cpuSelection === "paper") {
            cpuPlay.textContent = "✋";
            cpuPlay.classList.add("winner");
            playerPlay.classList.add("loser");
            ++cpuWins;
            cpuScore.textContent = `CPU - ${cpuWins}`;
        } else if (cpuSelection === "scissors") {
            cpuPlay.textContent = "✌";
            cpuPlay.classList.add("loser");
            playerPlay.classList.add("winner");
            ++playerWins;
            playerScore.textContent = `PLAYER - ${playerWins}`;
        } else {
            cpuPlay.textContent = "✊";
            cpuPlay.classList.add("draw");
            playerPlay.classList.add("draw");
            return
        }
    } else if(playerSelection === "paper") {
        playerPlay.textContent = "✋";
        if (cpuSelection === "scissors") {
            cpuPlay.textContent = "✌";
            cpuPlay.classList.add("winner");
            playerPlay.classList.add("loser");
            ++cpuWins;
            cpuScore.textContent = `CPU - ${cpuWins}`;
        } else if (cpuSelection === "rock") {
            cpuPlay.textContent = "✊";
            cpuPlay.classList.add("loser");
            playerPlay.classList.add("winner");
            ++playerWins;
            playerScore.textContent = `PLAYER - ${playerWins}`;
        } else {
            cpuPlay.textContent = "✋";
            cpuPlay.classList.add("draw");
            playerPlay.classList.add("draw");
            return
        }
    } else if(playerSelection === "scissors") {
        playerPlay.textContent = "✌";
        if (cpuSelection === "rock") {
            cpuPlay.textContent = "✊";
            cpuPlay.classList.add("winner");
            playerPlay.classList.add("loser");
            ++cpuWins;
            cpuScore.textContent = `CPU - ${cpuWins}`;
        } else if (cpuSelection === "paper") {
            cpuPlay.textContent = "✋";
            cpuPlay.classList.add("loser");
            playerPlay.classList.add("winner");
            ++playerWins;
            playerScore.textContent = `PLAYER - ${playerWins}`;
        } else {
            cpuPlay.textContent = "✌";
            cpuPlay.classList.add("draw");
            playerPlay.classList.add("draw");
            return
        }
    }
}

function getGameWinner() {
    if (playerWins === requiredWins) {
        scoreBoard.textContent = "YOU WON!!";
    } else if (cpuWins === requiredWins) {
        scoreBoard.textContent = "YOU LOSS!!";
    }
}