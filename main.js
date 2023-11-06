function getComputerChoice(){
    //return random rock paper scissors
    //use array to declare three choices
    //randomize option based on arrays 
    //return random choice
    const choices = ['rock','paper','scissor']
    // console.log(choices[Math.floor(Math.random()*choices.length)])
    return choices[Math.floor(Math.random()*choices.length)];
}
let computerScore = 0;
let playerScore = 0;
let tieScore = 0;
const output = document.querySelector('.output');
const para = document.createElement('p');


function playRound(playerSelection,computerSelection){
    console.log(computerSelection);
    console.log(playerSelection);
    //return string that declare winner, x lose z beats k
    //implement logic paper scissor rock
    //rock beats scissors, scissors beat paper, paper beats rock
    if(playerSelection === computerSelection){
        console.log('its a tie');
        tieScore += 1;

    }else if((playerSelection === 'rock' & computerSelection === 'scissors') | (playerSelection === 'scissors' & computerSelection === 'paper') | (playerSelection === 'paper' & computerSelection === 'rock')){
        console.log('player win');
        playerScore += 1;
    }else{
        console.log('computer win!');
        computerScore +=1;
    }

}

// function game(){
//     counter = 1;
//     while(counter <= 5){
//         console.log(counter);
//         let playerSelection = prompt('Input player choice.')
//         playRound(playerSelection.toLowerCase(),getComputerChoice());
//         counter +=1;


//     }
    
  
    const scoreBoard = `Player:${playerScore}\nComputer:${computerScore}\nTie:${tieScore}`;
    if(computerScore > playerScore){
        alert(`${scoreBoard}\nComputer Wins!`);
        para.textContent = `${scoreBoard}\nComputer Wins!`;
        output.appendChild(para);
    }else if(computerScore === playerScore){
        alert(`${scoreBoard}\nNobody Wins!`);
        para.textContent = `${scoreBoard}\nNobody Wins!`;
        output.appendChild(para);
    }else{
        alert(`${scoreBoard}\nPlayer Wins!`);
        para.textContent = `${scoreBoard}\nPlayer Wins!`;
        output.appendChild(para);


    }
}

game();