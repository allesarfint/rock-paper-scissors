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


        //Variable declaration string playerInput
        let playerInput = "";

        //Variable declaration string computerInput
        let computerInput = "";

        //Variable declaration number playerWins
        let playerWins = 0;

        //Variable declaration number computerWins
        let computerWins = 0;

        //Variable declaration number numberOfGames
        let numberOfGames = 0;

        //Ask the player to input an option and validate it
        function playerSelection() {
            playerInput = prompt("Input your play: rock, paper or scissor");
            console.log(playerInput);
            return playerInput
        }

        //Make sure the playerInput is valid and lower case
        function validatePlayerInput(input) {
            if (typeof input === null || typeof input === "") {return numberOfGames = 5}
            if (typeof input === "string") {
                input = input.toLowerCase();
                if (input === "rock" || input === "paper" || input === "scissors") {
                    return playerInput = input
                } else {
                    alert('Incorrect selection, please enter only: rock, paper or scissors');
                    return false;
                }
            } else {
                alert('Incorrect selection, please enter only: rock, paper or scissors');
                return false;
            }
        }

        //Randomly generate the computer input from an array
        function computerPlay() {
            const computerOptions = ["rock", "paper", "scissors"];
            let randomSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)]
            return computerInput = randomSelection            
        }

        //Determine the winner of the round
        //    if playerInput rock
        //        computerInput rock = plus one to computer and player wins
        //        computerInput paper = computerWins plus one
        //        computerInput scissors = playerWins plus one
        //    if playerInput paper
        //        computerInput rock = playerWins plus one
        //        computerInput paper = plus one to computer and player wins
        //        computerInput scissors = computerWins plus one
        //    if playerInput scissors
        //        computerInput rock = computerWins plus one
        //        computerInput paper = playerWins plus one
        //        computerInput scissors = plus one to computer and player wins
        function rockPaperScissorsRound (player, computer) {
            if (player === "rock") {
                if (computer === "rock") {
                    alert("Draw, play again");
                    return false                   
                } else if (computer === "paper") {
                    alert("Computer Wins");
                    return ++computerWins
                } else if (computer === "scissors") {
                    alert("Player Wins");
                    return ++playerWins
                }
            } else if (player === "paper") {
                if (computer === "paper") {
                    alert("Draw, play again");
                    return false                                     
                } else if (computer === "scissors") {
                    alert("Computer Wins");
                    return ++computerWins
                } else if (computer === "rock") {
                    alert("Player Wins");
                    return ++playerWins
                }
            } else if (player === "scissors") {
                if (computer === "scissors") {
                    alert("Draw, play again");
                    return false                                     
                } else if (computer === "rock") {
                    alert("Computer Wins");
                    return ++computerWins
                } else if (computer === "paper") {
                    alert("Player Wins");
                    return ++playerWins
                }
            }
        }

        //Repeat five times
        function playGame() {
            if (validatePlayerInput(playerSelection()) === false) {
                playGame();
                return
            }
            computerPlay();
            if (rockPaperScissorsRound(playerInput, computerInput) !== false) {
                numberOfGames++;
            };
        }

        function runGame () {
            while (numberOfGames < 5) {
                playGame()
            }
            numberOfGames = 0;
            if (playerWins > computerWins) {
                alert(`The Player wins with ${playerWins} rounds against ${computerWins}.`)
            } else {
                alert(`The Computer wins with ${computerWins} rounds against ${playerWins}.`)
            }
            playerWins = 0;
            computerWins = 0;
        }   