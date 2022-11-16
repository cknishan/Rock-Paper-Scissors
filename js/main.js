const weapons = ['rock','paper','scissors']

playerImgSrc = document.querySelector('#weapon-img-player')
computerImgSrc = document.querySelector('#weapon-img-computer')

const weaponList = [...document.querySelectorAll('.player-weapons > div')];

let roundDescription = document.querySelector('#round-details')

let playerScoreText = document.querySelector("#player-score")
let computerScoreText = document.querySelector("#computer-score")
let playerScore = 0;
let computerScore = 0;


weaponList.forEach((e) => {
  
  e.addEventListener('click', () => {
  const playerSelection = getPlayerChoice(e)
  const computerSelection = getComputerChoice();
  
  setTimeout(function(){
    playerImgSrc.classList.add('img-transition');
    computerImgSrc.classList.add('img-transition');
  },5);

  playerImgSrc.classList.remove('img-transition');
    computerImgSrc.classList.remove('img-transition');

  playRound(playerSelection, computerSelection)
  

  });
});


function getPlayerChoice(li){
  const index = weaponList.indexOf(li);
  if (index === 0) {
    playerImgSrc.src = "../img/icons/rock.png"
  } else if (index === 1) {
    playerImgSrc.src = "../img/icons/paper.png"
  } else if (index === 2) {
    playerImgSrc.src = "../img/icons/scissors.png"
  }
  return weapons[index];
}

function getComputerChoice(){
  const index = Math.floor(Math.random() * 3);
  if (index === 0) {
    computerImgSrc.src = "../img/icons/rock.png"
  } else if (index === 1) {
    computerImgSrc.src = "../img/icons/paper.png"
  } else if (index === 2) {
    computerImgSrc.src = "../img/icons/scissors.png"
  }
  return weapons[index]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
      if (computerSelection === 'rock') {
        roundDescription.innerHTML = `It's a tie!`
      } else if (computerSelection === 'paper') {
        roundDescription.innerHTML = `computer won!`
        computerScore++;
      } else {
       roundDescription.innerHTML = `player won!`
       playerScore++;
      } 
    }
    else if (playerSelection === 'paper') {
      if (computerSelection === 'paper') {
        roundDescription.innerHTML = `It's a tie!`
      } else if (computerSelection === 'scissors') {
        roundDescription.innerHTML = `computer won!`
        computerScore++;
      } else {
       roundDescription.innerHTML = `player won!`
       playerScore++;
      }
    }
    else if (playerSelection === 'scissors') {
      if (computerSelection === 'scissors') {
        roundDescription.innerHTML = `It's a tie!`
      } else if (computerSelection === 'rock') {
        roundDescription.innerHTML = `computer won!`
        computerScore++;
      } else {
       roundDescription.innerHTML = `player won!`
       playerScore++;
      }
    }

    playerScoreText.textContent = playerScore
    computerScoreText.textContent = computerScore

    roundDescription.innerHTML += `
    <p> Player chose ${playerSelection}.</p>
    <p> Computer chose ${computerSelection}.</p>
    `

}


// [...document.querySelectorAll('.dropdown-content > a')].forEach((e) => {
//   e.addEventListener('click', () => {
//     alert("This will redirect to a different page and reset game progress")
//   })
// })



