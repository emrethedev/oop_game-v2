/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(){
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }

/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
     createPhrases() {
         const arrayPhrase = [
                              new Phrase('Chocolate Rain'),
                              new Phrase('I am ready'), 
                              new Phrase('My precious'),                 
                              new Phrase('Just keep swimming'), 
                              new Phrase('Phrase Hunter Rocks')
                            ];
        return arrayPhrase;
     }

/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
    getRandomPhrase() {
        const pickRandomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[pickRandomPhrase];
    };

/**
 * Begins game by selecting a random phrase and displaying it to user
 */

    startGame() {

        // hides the start screen overlay (the `div` element with an `id` of `overlay`)
        const divOverlay = document.querySelector('#overlay');
        divOverlay.style.display = 'none';

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    
    }

/**
 * Checks for winning move
 * @return {boolean} True if game has been won, false if game wasn't
won */

    checkForWin() {
        // When the game is won, we would not have any hidden letters, so then number should be 0.
        const winCheck = document.querySelectorAll('.hide');
        const winLen = winCheck.length;
        const reqHidden = winLen === 0;

        if ( reqHidden ) {
            return true;
        } else {
            return false;
        }

    };

/**
 * Increases the value of the missed property
 * Removes a life from the scoreboard
 * Checks if player has remaining lives and ends game if player is out
 */
removeLife() {

    // Addressing all the heart images on the page into a NodeList
    const livesImg = document.querySelectorAll('.tries img');
    // console.log(livesImg);

    // Set the current heart to lost heart image.
    // console.log(this.missed);
    // console.log( livesImg[this.missed]);
    livesImg[this.missed].src = 'images/lostHeart.png';

    // Increase the missed counter
    this.missed = this.missed + 1;

    // How to determine whether the game is lost not:
    const isLost = this.missed === 5;

    if ( isLost ) {
        this.gameOver(false);
    }
};

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game */
gameOver(gameWon) {

    const mainOverlay = document.querySelector('#overlay');
    const overMsg = document.querySelector('#game-over-message')
    
    const winMsg = 'Great job! You have beat the game.';
    const loseMsg = 'Welp! You are out of hearts. Try again?';

    mainOverlay.style.display = 'block';

    // If the game is won.
    if ( gameWon ) {

        overMsg.className = 'win';
        overMsg.innerHTML = winMsg;

    // If the game is not won, but lost.
    } else {
        overMsg.className = 'lose';
        overMsg.innerHTML = loseMsg;
    }
};

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element */
handleInteraction( button ){ 
    
    const btnLetter = button.textContent;
    
    button.disabled = true;

    const addClass = (value) => {
        button.classList.add(value);
    }

    if ( this.activePhrase.checkLetter(btnLetter) ) {

        addClass('chosen');
        this.activePhrase.showMatchedLetter(btnLetter);

        if ( this.checkForWin() ) {
            this.gameOver(true);
        }

    } else {

        addClass('wrong');
        this.removeLife();
    }
};

/**
 * When the game is over for any reason, it returns the changes back to original status so it can be playable again, i.e. hearts = 5
 */
reset() {

    // Returning the missed to zero
    this.missed = 0;

    // Targeting and picking items to change later
    const phraseUl = document.querySelectorAll('#phrase ul');
    const allTries = document.querySelectorAll('.tries');
    const allKeys = document.querySelectorAll('.key');
    const liveHeart = 'images/liveHeart.png';

    phraseUl[0].innerHTML = ` `;

    // Resetting the hearts so if there is any 'lostHeart' it changes it back to original state
    for ( let i = 0; i < allTries.length; i++ ) { 

        allTries[i].firstElementChild.src = liveHeart;

    }

    // Making buttons ('.allKeys') clickable again and removing the gray/orange colors that they may have after clicking on them
    for ( let i = 0; i < allKeys.length; i++ ) { 
        
        allKeys[i].classList.remove('chosen');
        allKeys[i].classList.remove('wrong');

        allKeys[i].disabled = false;

    }
}

 };
