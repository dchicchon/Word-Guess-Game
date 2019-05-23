
var playerWins = document.getElementById('player-wins'); 
var playerLosses = document.getElementById('player-losses');
var guessLeft = document.getElementById('guess-left');
var guessMade = document.getElementById('guess-made')
var playerGuess = document.getElementById('player-guess')


var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var left = 10;
var compSelect;
var made = []; 
var guess;

function reset() {
    compSelect = alphabet[Math.floor(Math.random() * alphabet.length)];
    left = 10;
    made = [];
    guessLeft.textContent = left;
    guessMade.textContent = made;
}

function checkAlpha(input) {
    var letter = /^[a-z]+$/;
    if(input.match(letter)) {
        return true
    }
    else {
        return false
    }
}



// The computer selects an random indice within the variable alphabet using the Math.random function
// We multiply the length of the alphabet with Math.random to pick an indice and Math.floor with round down
// the number that we get back. 

compSelect = alphabet[Math.floor(Math.random() * alphabet.length)];

// .onkeyup is assigned a function 'event' so that when a key is pressed, we add that key to the array 'made'.
// guess.Made is assigned the value of the list made to get the content of made into the html.
document.onkeyup = function(event) {

    if(checkAlpha(event.key)) {
        guess = event.key;
        playerGuess.textContent = guess;

        if (made.includes(event.key)) {
        console.log('Please pick a different letter')
        }

        else {
            made.push(event.key)
            guessMade.textContent = made
            console.log(compSelect);

            // Here I create the win-condition that is if the event.key equals the randomly selected letter by compSelect, ///// then the number of wins increases by 1. We then assign wins to the playerWins.textContent to write the number /// of wins onto the HTML. We also reset the guesses left, guesses made, and the indice assigned to compSelect.

            if (event.key === compSelect) {
                console.log('You win');
                wins++;
                playerWins.textContent = wins;
                reset();
            }
    
            else {
            left--
            guessLeft.textContent = left
            if (left === 0) {
                console.log('You lose!');
                losses++
                playerLosses.textContent = losses;
                alert('The Computer guessed ' + compSelect) 
                reset()
                }
            }
        }

    }
    else {
        console.log('That is not a valid key')
    }
}
