/*
Given a word, return all possible spelling blocks that could have been used, or return false if not possible. 
This time, allow a block to be used in reverse (e.g., B:O or O:B).

findBlocks("BOOK") ➞ [ {B:O}, {K:X} ]  // Or similar structure


Input:
  - A string word
Output:
  - and array of spelling blocks

Questions:
  - Will there always be a string as an input?
  - Will the string always be in caps?
  - Will the string ever be empty?
  - Will the output be represened in a 2d array of each block?

Rules:
  - Given the spelling blocks return the blocks that can be used to spell the word and false if not possible
  - The function should be case insesitive
  - If the string is emoty return and empty array
  - Return a 2d array of the word can be spelt
  - Iterate over the spelling block and the word remove the block given each letter
  - return the removed blocks
  
  
Data Structure:
  - Iterateing over a 2d array and push elements to another array
  - Iterate ober input string

Algorithm:
  - Upper case the input string
  - If the string length is 0 return an empty array
  - create a used blocks array
  - Make a copy of the letter blocks
  - Iterate over the input string
    - Create a found var and set to false
    - Iterate over the blocks
      - If the current letter is included in the current blocks array
        - splice the current block from the blocks copy and push to used blocks
    - If the the found var is false return false
  - return used blocks

*/

const BLOCKS = [
  ['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
  ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
  ['V', 'I'], ['L', 'Y'], ['Z', 'M']
];

function findBlocks(word) {
  if (word.length === 0 ) return [];
  word = word.toUpperCase();

  let usedBlocks = [];
  let blocksCopy = BLOCKS.slice();

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    let found = false;

    for (let j = 0; j < blocksCopy.length; j++) {
      let block = blocksCopy[j];

      if (block.includes(letter)) {
        usedBlocks.push(blocksCopy.splice(j, 1)[0])
        found = true;
        break;
      }
    }
    if (found === false) return false;
  }

  return usedBlocks;
}


console.log(findBlocks("BATCH")) // [ ['B', 'O'], ['N', 'A'], ['G', 'T'], ['C', 'P'], ['H', 'U'] ] 
console.log(findBlocks('jest')) // [['J', 'W'], ['R', 'E'], ['F', 'S'], ['G', 'T']]
console.log(findBlocks("BOOK")) // false
console.log(findBlocks(""))
console.log(findBlocks("FLOW"));  
// → [ ['F', 'S'], ['L', 'Y'], ['B', 'O'], ['J', 'W'] ]

console.log(findBlocks("DRUM"));  
// → [ ['D', 'Q'], ['R', 'E'], ['H', 'U'], ['Z', 'M'] ]

console.log(findBlocks("VILE"));  
// → [ ['V', 'I'], ['L', 'Y'], ['B', 'O'], ['R', 'E'] ]

console.log(findBlocks("ECHO"));  
// → [ ['R', 'E'], ['C', 'P'], ['H', 'U'], ['B', 'O'] ]
console.log(findBlocks("BOOB"));  
// → false  (only one ['B', 'O'] block, but 'B' and 'O' repeat)

console.log(findBlocks("APPLE"));  
// → false (two P’s, but only one block that has 'P': ['C', 'P'])

console.log(findBlocks("WOW"));  
// → false (only one ['J', 'W'] block for two W's)
console.log(findBlocks(""));     
// → []  (empty word — returns empty array)

console.log(findBlocks("Q"));    
// → [ ['D', 'Q'] ] (Q is in block ['D', 'Q'])

console.log(findBlocks("ZYMURGY"));    
// → false (multiple uses of 'Y', and likely block conflicts)

console.log(findBlocks("TANK"));    
// → [ ['G', 'T'], ['N', 'A'], ['X', 'K'] ] (Valid, uses one letter from each block)

