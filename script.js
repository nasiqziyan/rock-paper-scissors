const resultBox = document.querySelector('.resultBox');


function getComputerChoice() {
	let guessValue = Math.floor(Math.random()*3);
    let types = ["Rock", "Paper", "Scissors"];
    let guessString = types[guessValue];
    return guessString
}

function playRound(playerSelection, computerSelection) {
    
    let roundWinner;
    
    playerSelection = playerSelection.target.textContent; //console.log(this.textContent); equally works to replace this line
    
    
    computerSelection = getComputerChoice();
    

    if (playerSelection == computerSelection) {
        resultBox.textContent = "It's a tie!";
        roundWinner = 'tie';
        

    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
            (playerSelection == "Paper" && computerSelection == "Rock") || 
            (playerSelection == "Scissors" && computerSelection == "Paper")) {
            resultBox.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;
            roundWinner = 'player';
            

    } else {
            resultBox.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
            roundWinner = 'computer';
      }

    updateScores(roundWinner);
    
}

function updateScores(roundWinner) {
    switch (roundWinner) {
        case 'player':
            playerScore++;
            console.log(playerScore);
            break;
        
        case 'computer':
            computerScore++;
            console.log(computerScore);
            break;
            
        case 'tie':
            console.log('its a tie.')
            break;
                
    }
    
    if ((playerScore == 5) || (computerScore == 5)) {
        scoreCount.textContent = `${playerScore} - ${computerScore}`;
        console.log('SOMEONE REACHED 5!!');
        gameWinner = (playerScore > computerScore) ? 'player' : 'computer';
        console.log(gameWinner);
        // gameOver(gameWinner);
        

    } else {
        scoreCount.textContent = `${playerScore} - ${computerScore}`;
    }
}



// function game() {

//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         console.log(`Round ${i+1}/5`)

//         let playerSelection = prompt("Rock, Paper or Scissors?", "");
//         if (playerSelection === null) {
//             return console.log("Cancelled");
//         }


//         let computerSelection = getComputerChoice();

//         playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        
//         if (!(playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors")) {
//             return "Please choose from either 'Rock', 'Paper' or 'Scissors.'";
//         }

//         let playRoundValue = playRound(playerSelection, computerSelection);
        

//         if (playRoundValue == `You Win! ${playerSelection} beats ${computerSelection}. `) {
//             console.log(playRoundValue);
//             playerScore++;

//         } else if  (playRoundValue == `You Lose! ${computerSelection} beats ${playerSelection}. `) {
//             console.log(playRoundValue);
//             computerScore++;

//         } else console.log(playRoundValue);
        
        
//         console.log(`You: ${playerScore}\nComputer: ${computerScore}`)
        
        
        
//     }
// }



const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const scoreCount = document.querySelector('.scoreCount');

let playerScore = 0;
let computerScore = 0;
scoreCount.textContent = `${playerScore} - ${computerScore}`;

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);




