module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content.
 
  this.letters = function letters() {
  //   let theLetters = [];
  //   const letterRegex = /[a-z]/i;
  //     // for (let i=0; i < this.content.length; i++)  {
  //   Array.from(this.content).forEach(function(character) {
  //     // let character = this.content.charAt(i);
  //     if (character.match(letterRegex)) {
  //       theLetters.push(character);
  //     }
  //   });
  // return theLetters.join("");
    
    // return this.content.filter(char => char.match(/[a-zA-Z]/))
    // return this.content; // stub return value

    // Functional programming solution
  //   return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
    // Note that the Array.from() is important to make the string into an array.

    // EVEN BETTER FUNCTIONAL PROGRAMMING SOLUTION WHICH USES SHORT CIRCUIT EVALUATION
    return this.content.match(/[a-z]/gi || []).join("");

  }
  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}