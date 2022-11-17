const weapons = ['rock','paper','scissors']

let playerImgSrc = document.querySelector('#weapon-img-player')
let computerImgSrc = document.querySelector('#weapon-img-computer')

const weaponList = [...document.querySelectorAll('.player-weapons > div')];

let roundDescription = document.querySelector('#round-details')

let playerScoreText = document.querySelector("#player-score")
let computerScoreText = document.querySelector("#computer-score")
let playerScore = 0;
let computerScore = 0;

// Settings modal variables
let gamePoint = document.querySelector("#game-point")
gamePoint.defaultValue = 5
const submitBtn = document.querySelector("#submit-btn")

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

  // console.log(playerScore, computerScore, gamePoint.value)
  setTimeout(function(){
    if (computerScore == gamePoint.value || playerScore == gamePoint.value) {
      alert("Game Over!")

      const winner = ( playerScore > computerScore ? "Player" : "Computer" )
      roundDescription.innerHTML = `
      <h3> The winner is ${winner}!! </h3>
      `  
      playerScore = 0;
      computerScore = 0
      return 
    }
  },5);

}

function getGamePoint(num) {

}


// [...document.querySelectorAll('.dropdown-content > a')].forEach((e) => {
//   e.addEventListener('click', () => {
//     alert("This will redirect to a different page and reset game progress")
//   })
// })

// Settings modal

const settingsBtn = document.querySelector("#settings-btn")
const settingsClose = document.querySelector(".settings-close")
const settings = document.querySelector(".settings-wrapper")

let gamePoint2 = null;
settingsBtn.addEventListener("click", () => {
  gamePoint2 = gamePoint.value
  settings.style.display = 'grid';
})

settingsClose.addEventListener('click', () => {
  console.log(gamePoint2)
  gamePoint.value = gamePoint2
  settings.style.display = 'none';
})

submitBtn.addEventListener('click', () => {
  while (gamePoint.value <=0 || gamePoint.value > 100) {
    alert("Input can't be less than 0 or greater than 100")
    alert("If invalid value is selected it will return to default value of 5")
    gamePoint.value = 5
  }
  settings.style.display = 'none';
})

