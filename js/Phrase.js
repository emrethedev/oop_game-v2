/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor( phrase ) {
        this.phrase = phrase.toLowerCase();
     }

/**
* Display phrase on game board
*/
   addPhraseToDisplay() {

      // Picks the UL element that is inside the DIV element that has the 'phrase' ID.
      // <div id="phrase" class="section"> 
      //    <ul></ul>
      
      const pickDivUl = document.querySelector('#phrase ul');

      // Instead of making use of 'split', I use a for-loop to iterate over and fetch letters individually.
      // i.e -- tree => length: 4 => 0. t, 1. r, 2. e, 3. e

      for ( let i = 0; i < this.phrase.length; i++ ) {
         
         const liMaker = document.createElement('li');
         liMaker.innerHTML = this.phrase[i];

         if ( this.phrase[i] === ' ' ) {
            liMaker.className = 'space';
         } else {
            liMaker.className = `hide letter ${this.phrase[i]}`;
         }
         pickDivUl.appendChild(liMaker);
      }

      
   };

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check */
checkLetter(letter) {
   if ( this.phrase.includes(letter) ) {
      return true;
   } else {
      return false;
   }
};

/**
* Displays passed letter on screen after a match is found * @param (string) letter - Letter to display
*/
showMatchedLetter(letter) {
   
   // Since these are the only LI elements in the script, I am going more general and selecting all of them at once.
   const indvLetters = document.querySelectorAll('#phrase li');

   for ( let i = 0; i < indvLetters.length; i++ ) {
      if ( indvLetters[i].innerHTML === letter ) { 
         indvLetters[i].className = 'show letter';
      }
   }
 }
}