/*
A collection of spelling blocks has two letters per block, as shown in this list:

Copy Code
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
This limits the words you can spell with the blocks to only those words that do not use both letters from any 
given block. You can also only use each block once.

Write a function that takes a word string as an argument, and returns true if the word can be spelled using 
the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply 
the rules.

Examples:

Copy Code
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true

Ex:
  - 'BATCH' => [B:O], [N:A], [G:T], [C:P], [H:U] => valid
  - 'BUTCH` => [B:O], [H:U], [G:T], [C:P], [H:U] => not valid (uses 2 blocks)
  - 'jest' => J:W, R:E, F:S, G:T => valid 

Input:
  - String representing a word
Output:
  - True or false depending on if we can spell the word with block available

Questions:
  - Will we always be given a string as an arguments?
  - Will there be more then one argument?
  - Will the string contain characters other then letters?
  - Will the string be any length?
  - Will an empty string be input?

Rules: 
  - Each letter in the input string can only use one block
  - We are returning a boolean
  - The input letter is case insensitive 

Data structure
 - 2 dimentional array for the blocks
 - returning a boolean
 - String input

Algorithm:
  - Sanitize the input string ie remove all characters that are not letters
    - use regex to replace all non letter characters with ''
  - Capitalize the input string
    - call toUpperCase
  - iterate over input string (for loop)
    - Iterate over Blocks (forEach (block, idx))
      - Check to see if the current character is available in one of the blocks (includes(currentChar))
        - If current char is not included in one of the blocks
          - return false
        - If current char is available in one of the blocks remove block from blocks
          - Remove block from the blocks array
  - return true
  

*/

const BLOCKS = [
  ['B','O'], ['X','K'], ['D','Q'], ['C','P'], ['N','A'],
  ['G','T'], ['R','E'], ['F','S'], ['J','W' ], ['H','U'],
  ['V','I'], ['L','Y'], ['Z','M']
  ]

function isBlockWord(word) {
  let sanitizedWord = word.replace(/[^a-zA-Z]/g, '').toUpperCase();
  if (!sanitizedWord) { return false }
  let copyOfBlocks = BLOCKS.slice()

  for (let char of sanitizedWord) {
    let foundBlockIndex = copyOfBlocks.findIndex(block => block.includes(char));
    if (foundBlockIndex === -1) {
      return false;
    }
    copyOfBlocks.splice(foundBlockIndex, 1);
  }
  return true;
}


console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false