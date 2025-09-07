/*

In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return an array of strings where an uppercase letter is a person standing up.

Rules

1.  The input string will always consist of lowercase letters and spaces, but may be empty, in which case you must return an empty array. 2.  If the character in the string is whitespace then pass over it as if it was an empty seat



Input:
  - A string word
Outputs:
  - An array words but the a wave of capiticalized letters in the string

Requirements:
  - We create an array the length of the input word
    - Going through the array we cap every letter as we move
  - The input will always be lower cased letters
  - Maybe empty inputs
  - If there is a white space pass over it

Questions:
  - The return array should be the length of letters in the input string

  Data structure:
    - I can either make a array of word to map over
    - loop and append words to an empty array

Algorithm:
  - Create an array of words the length of the letters
  - count all the letters in the input string
  - get the length of the word
  - Map over the word
    - lower case the word except for the letter at index
    - If current index is a space skip
  - Return word
x 
*/

function wave(string) {

  let lengthLetters = string.replace(/[^a-z]/g, '').length;
  let wave = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[^a-z]/)) {
      continue;
    } else {
      let waveStep = string.slice(0, i) + string[i].toUpperCase() + string.slice(i + 1);
      wave.push(waveStep);
    }
  }
  return wave;
}


console.log(wave('hello')); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave('codewars')); //["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
console.log(wave('')); // []
console.log(wave('two words')); // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
console.log(wave(' gap ')); // [" Gap ", " gAp ", " gaP "]
