/*
1. Unique Pair Blocks

You’re given a list of blocks, each with three letters, and a word. You may only use each block once, and you may only use one letter from each block.
Write a function that returns true if the word can be spelled using the blocks.

Example blocks:

['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQR', 'STU', 'VWX', 'YZ_']
canSpell("DOG") ➞ true
canSpell("FACE") ➞ false  // Only one block has F, A, or C

Input:
  - a String
Output:
  - true or false on weather the word can be spelled with the blocks given

Rules:
  - We can only us each spelling block once.
  - If we were to iterate over the word and if the current letter is included spelling block remove the spelling block
    - Remove the block
  - return false if the letter is not included return false
  - Else return true
  - Convert the input to capital letters to make the function case insesitive

Questions:
  - Will there always be a string input?
  - Will there be an empty string input?
  - Will there be no arguments?
  - Will the String always contian capitialized letters?

Data Structure
  - Split the input string into an array
  - Iterate over the Letter blocks

Algorithm:
  - Capitalize the input string
  - Make a copy of the letter blocks
  - Iterate over the input string
    - Iterate over the the Letter blocks
      - If the current letter is included in the letter block
        - Remove the letter block from the Letterblocks
      - Else
        - return flase
  - return true

*/

const LETTER_BLOCKS = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQR', 'STU', 'VWX', 'YZ_'];

function canSpell(word) {
  word = word.toUpperCase();
  let LetterBlocksCopy = LETTER_BLOCKS.slice();

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    let found = false;

    for (let j = 0; j < LetterBlocksCopy.length; j++) {
      let block = LetterBlocksCopy[j];

      if (block.includes(letter)) {
        LetterBlocksCopy.splice(j, 1);
        found = true;
        break;
      } 
    }
    if (!found) return false
  }

  return true;
}

console.log(canSpell("DOG"))  // true
console.log(canSpell("Dog")) // true
console.log(canSpell("FACE")) // false  // Only one block has F, A, or C
console.log(canSpell("")) // true
