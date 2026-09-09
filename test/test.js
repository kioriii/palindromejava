
// Importing the assertion library that allows us to assert that things are true in our tests. Import the Phrase object as well from index.js
let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {

  describe ("#palindrome", function() {
    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome", function() {
      let mixedCasePalindrome = new Phrase("RaceCar");
      assert(mixedCasePalindrome.palindrome());
    });

    it("should return true for a palindrome with punctuation", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert (punctuatedPalindrome.palindrome());
    });
  })

  describe("#letters",function() {
    it("should return only letters", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      // assert(punctuatedPalindrome.letters() === "MadamImAdam");
      assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
    });
  });
});

