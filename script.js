console.log("Hello World");


function getComputerChoice() {
	let guessValue = Math.floor(Math.random()*3);
    let types = ["Rock", "Paper", "Scissors"];
    let guessString = types[guessValue];
    return guessString
}

function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    

    if (!(playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors")) {
        return "Please choose from either 'Rock', 'Paper' or Scissors."
    }

    if (playerSelection == computerSelection) {
        return "It's a tie!";

    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
             (playerSelection == "Paper" && computerSelection == "Rock") || 
             (playerSelection == "Scissors" && computerSelection == "Paper")) {

            return `You Win! ${playerSelection} beats ${computerSelection}.`;

    } else {
            return  `You Lose! ${computerSelection} beats ${playerSelection}.`
      }
    
}

