

function getRand(min = 0, max = 99){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function guessingGame() {

    let winner = false;
    
    let guessAttempts = 0;

    const randNum = getRand();

    function game(guess){   
        
        if (winner) return "The game is over, you already won!"
        if(guess < randNum){
            guessAttempts++;
            return `${guess} is too low!`;
        } else if (guess > randNum){
            guessAttempts++;
            return `${guess} is too high!`;
        } else {
            guessAttempts++;
            winner = true;
            return `You win! You found ${randNum} in ${guessAttempts} guesses.`
        }
    }

    return game
}

module.exports = { guessingGame };
