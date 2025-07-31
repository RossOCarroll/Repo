/*
You’re given a bag of letter tokens (like in Scrabble). Each token has a letter on it, and you can only use each token once.
Return true if the word can be spelled using the tokens.

canMakeWord("APPLE", ['A', 'P', 'P', 'L', 'E']) ➞ true
canMakeWord("APPLE", ['A', 'P', 'L', 'E']) ➞ false


Input:
  - A string word and a array of letters
Output:
  - True or false depending on if you can spell the word with the letters given

Requirments
  - You can only use each letter once
  - there will always be 2 arguments given
  - If the string is emoty return true
  - Letters will always be in caps
  - If the string and array are not the same size return false
  - If the string is sorted and the array is sorted and joined they should equal each other

Questions:
  - Will there always be 2 arguments given, a string and an array?
  - Will the string ever be empty?
  - Will the array ever be empty?
  - Will the string and array letters always be in caps?
  - Will the array be sparse?
  - 

Data Structure:
  - I know Im working with array an strings

Algorithm:
  - Return true if input string is empty
  - If the string and array lengths are not equal return false
  - Split the string into the array and sort
  - Sort the input array
  - Return array === string

*/

// function canMakeWord(word, letters) {
//   if (word.length < 1) return true;
//   if (letters.length < 1) return false;
//   if (letters.length !== word.length) return false;

//   word = word.split('').sort();
//   letters = letters.sort();
//   let sameLetters = [];

//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letters[i]) {
//       sameLetters.push(true);
//     } else {
//       sameLetters.push(false);
//     }
//   }
//   return !sameLetters.some(bool => bool === false);
// }


function canMakeWord(word, letters) {
  if (word.length < 1) return true;
  if (letters.length < 1) return false;

  let available = letters.slice();
  
  for (let char of word) {
    let index = available.indexOf(char);
    if (index === -1) return false; 
    available.splice(index, 1); 
  }

  return true;
}

console.log(canMakeWord("APPLE", ['A', 'P', 'P', 'L', 'E'])) //➞ true
console.log(canMakeWord("KIWI", ['I', 'I', 'W', 'K'])) // true
console.log(canMakeWord("APPLE", ['A', 'P', 'P', 'L', 'E', 'Z'])) // true
console.log(canMakeWord("", ['I', 'I', 'W', 'K'])) // true
console.log(canMakeWord("BEES", [])) // false
console.log(canMakeWord("APPLE", ['A', 'P', 'L', 'E'])) //➞ false
console.log(canMakeWord("BEAR", ['P', 'E', 'A', 'R'])) //➞ false
