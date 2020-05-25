/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//  const phrase = new Phrase();
//  const game = new Game ();

// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// const game = new Game();

// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

// const game = new Game(); game.getRandomPhrase().addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

let game;
const gameBtn = document.querySelector('#btn__reset');
const screenBtns = document.querySelector('#qwerty');


gameBtn.addEventListener('click', () => {
    
    // instantiating the class
    console.log(game);
    game = new Game();
    console.log(game);

    // Resets the game
    game.reset();
    console.log('Game has been reset => OK');
    
    // Begins the game
    game.startGame();
    console.log('Game has been started => OK');
    
})

screenBtns.addEventListener('click', (event) => {

    let tag = event.target.tagName;

    if ( tag === 'BUTTON' ) { 
        game.handleInteraction(event.target);
    }
})

document.addEventListener('keyup', (e) => {

    const allKeys = document.querySelectorAll('.key');
    const overlaySel = document.querySelector('#overlay').style.display;

    if ( game !== undefined && overlaySel === 'none' ) {
        
        for ( let i = 0; i < allKeys.length; i++ ) {

            if ( e.key.toLowerCase() === allKeys[i].innerHTML ) {
                
                // Simulating the click
                allKeys[i].click();
            }
        }
    } else {
        
        throw console.warn('The game does not appear to be running just yet. Please Start Game, and try again.');
    }

    
})