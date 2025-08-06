// console.log(parseInt(Math.random() * 100 + 1) );
let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const startOver = document.querySelector('.resultParas')
const guessSlot = document.querySelector('.guesses')
const lastSlot = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault() // 
       const guess = parseInt(userInput.value)
       console.log(guess);
       
       validateGuess(guess)
    })
}

function validateGuess (guess){
    if(isNaN(guess)){
        alert('please enter a valid  a number')
    } else if (guess < 1){
        alert('please enter a grater than number')
    } else if (guess > 100) {
        alert('please enter a less than 100 number')
    } else {
        preGuess.push(guess)
        if(numGuess === 11){
             displayGuess(guess)
             displayMessage(`Game over, Random number was ${randomNumber}`)
             endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('you guessed it right')
        endGame()
    } else if  (guess < randomNumber){
        displayMessage(`number is TOO low`)
    } else if (guess > randomNumber){
        displayMessage(`number is TOO high`)
    }

}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    lastSlot.innerHTML = `${11 - numGuess}`

}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id ='newGame'>Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}


function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber  = parseInt(Math.random() * 100 + 1);
        preGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        lastSlot.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}
