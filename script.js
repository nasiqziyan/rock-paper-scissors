console.log("Hello World");


function getComputerChoice() {
	let guessValue = Math.floor(Math.random()*3);
    let types = ["Rock", "Paper", "Scissors"];
    let guessString = types[guessValue];
    return guessString
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        return "It's a tie!";

    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
             (playerSelection == "Paper" && computerSelection == "Rock") || 
             (playerSelection == "Scissors" && computerSelection == "Paper")) {

            return `You Win! ${playerSelection} beats ${computerSelection}. `;

    } else {
            return  `You Lose! ${computerSelection} beats ${playerSelection}. `
      }
    
}

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}/5`)

        let playerSelection = prompt("Rock, Paper or Scissors?", "");
        if (playerSelection === null) {
            return console.log("Cancelled");
        }


        let computerSelection = getComputerChoice();

        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        
        if (!(playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors")) {
            return "Please choose from either 'Rock', 'Paper' or 'Scissors.'";
        }

        let playRoundValue = playRound(playerSelection, computerSelection);
        

        if (playRoundValue == `You Win! ${playerSelection} beats ${computerSelection}. `) {
            console.log(playRoundValue);
            playerScore++;

        } else if  (playRoundValue == `You Lose! ${computerSelection} beats ${playerSelection}. `) {
            console.log(playRoundValue);
            computerScore++;

        } else console.log(playRoundValue);
        
        
        console.log(`You: ${playerScore}\nComputer: ${computerScore}`)
        
        
        
    }
}
