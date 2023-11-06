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

const selections = document.querySelectorAll('.selections');
const  logBoard = document.querySelector('.logBoard');
const scoreBoard = document.querySelector('.scoreBoard');
let finalScore;


function playRound(playerSelection,computerSelection){
    console.log(computerSelection);
    console.log(playerSelection);
    //return string that declare winner, x lose z beats k
    //implement logic paper scissor rock
    //rock beats scissors, scissors beat paper, paper beats rock
    if(playerSelection === computerSelection){
        console.log('its a tie');
        let para = document.createElement('p');
        tieScore += 1;
        para.innerHTML = `It's a tie <br/> Tie Score Updated: ${tieScore}`;
        logBoard.appendChild(para);

    }else if((playerSelection === 'rock' & computerSelection === 'scissors') | (playerSelection === 'scissors' & computerSelection === 'paper') | (playerSelection === 'paper' & computerSelection === 'rock')){
        console.log('player win');
        let para = document.createElement('p');
        playerScore += 1;
        para.innerHTML = `Player Win! <br/> Player Score Updated: ${playerScore}`;
        logBoard.appendChild(para);
    }else{
        console.log('computer win!');
        let para = document.createElement('p');
        computerScore +=1;
        para.innerHTML= `Computer Win! <br/> Computer Score Updated: ${computerScore}`;
        logBoard.appendChild(para);
    }
    finalScore = `Player:${playerScore} | Computer:${computerScore} | Tie:${tieScore}`;
scoreBoard.innerHTML =  finalScore
}

    let counter = 1;
    let playerSelection;

    //get player selection
    for(let i = 0; i< selections.length; i++){
        selections[i].addEventListener('click',function(){
            playerSelection = selections[i].getAttribute('data-selection');
            if(counter <= 5 ){
            console.log(counter);
            playRound(playerSelection,getComputerChoice());
            counter +=1;
            }else{

                if(computerScore > playerScore){
                    scoreBoard.innerHTML = `${finalScore} <br/> Computer Wins!`;
                }else if(computerScore === playerScore){
                    scoreBoard.innerHTML = `${finalScore} <br/>  Nobody Wins!`;
                }else{
                    scoreBoard.innerHTML = `${finalScore} <br/> Player Wins!`;          
                }

            }
        });
    }




