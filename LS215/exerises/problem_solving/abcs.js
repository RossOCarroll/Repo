/*
A collection of spelling blocks has two letters per block, as shown in this list:




This limits the words you can spell with the blocks to only those words that do not use both letters from 
any given block. You can also only use each block once.

Write a function that takes a word string as an argument and returns true if the word can be spelled using 
the set of blocks, false otherwise. You can consider the letters to be case-insensitive when you apply the 
rules.

Input:
  - One word string
Output:
  - true or false depending on weather the the input word can be spelled with the given blocks

Rules:
  - With only using the letter block once determine weather the input string can be spelled
  - The input will be case-insensetive
  - any word with 2 of the same letter will be false
  
Questions:
  - Will the input be a string? or will there be other types of data as arguments?
  - Will the input be an empty string?
  - Will it always be one word?

Data Structure:
  - We need to store the letter blocks : a nested array
  - Return a boolean
  - Iterating over a string

Algorithm:
  - Create the letter block array
  - Upper case the input string
  - Iterate over the input string
    - Iterate over the letter blocks
      - If the current letter is included in the current letter block
        - splice the current block from the letter blocks
      - else
        - return false
  - return true

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

*/
function isBlockWord(word) {
  let letterBlocks = [
    ['B', 'O'],
    ['X', 'K'],
    ['D', 'Q'],
    ['C', 'P'],
    ['N', 'A'],
    ['G', 'T'],
    ['R', 'E'],
    ['F', 'S'],
    ['J', 'W'],
    ['H', 'U'],
    ['V', 'I'],
    ['L', 'Y'],
    ['Z', 'M']
  ];

  word = word.toUpperCase();

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < letterBlocks.length; j++) {
      if (letterBlocks[j].includes(word[i])) {
        letterBlocks.splice(j, 1);
      }
    }
  }

  return letterBlocks.length === (13 - word.length);
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));      // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));       // false