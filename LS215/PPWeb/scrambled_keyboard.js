/*
2. Scrambled Keyboard

A broken keyboard returns two letters when a key is pressed. Given a key-to-output map and a target string, 
determine if it can be typed.

Example:

{
  'A': ['A', 'S'],
  'B': ['B', 'N'],
  'C': ['C', 'M'],
  ...
}
Each key press returns one of the two mapped letters. You can press any key once.

Input:
  - A key to output map object and a string word
Output:
  - true or false if the word can be spelled

Requirements:
  - Given the target word find if the word can be spelled with only using the letter once from the keyboard
  - Iterate over the object and find it the current letter is included in the object
  - If it is delete the pair

Questions:
  - Can you send me the key map?
  - Will the target word always be upercase?
  - Will there always be 2 arguments?
  - Will there there be an empty string as the target?

Data Structure:
  - Iterate over the input string
  - Iterate over the map given 

Algorithm:
  - reassign the target word to upper case
  - Iterate over the target word






*/

function scrambledKeys(map, target) {
  target = target.toUpperCase();
  let mapCopy = { ...map }; 

  for (let i = 0; i < target.length; i++) {
    let letter = target[i];
    let found = false;

    for (let key in mapCopy) {
      if (mapCopy[key].includes(letter)) {
        delete mapCopy[key]; 
        found = true;
        break;
      }
    }

    if (!found) return false;
  }

  return true;
}

const keyMap = {
  A: ['A', 'S'],
  B: ['B', 'N'],
  C: ['C', 'M'],
  D: ['D', 'E'],
  E: ['E', 'R'],
  F: ['F', 'T'],
  G: ['G', 'Y'],
  H: ['H', 'U'],
  I: ['I', 'O'],
  J: ['J', 'K'],
  L: ['L', 'Z'],
  M: ['M', 'Q'],
  N: ['N', 'W'],
  P: ['P', 'X']
};

console.log(scrambledKeys(keyMap, 'FIND')) // true
console.log(scrambledKeys(keyMap, 'HOPE')) // true
console.log(scrambledKeys(keyMap, 'BIN')) // true
console.log(scrambledKeys(keyMap, 'Joke'))
console.log(scrambledKeys(keyMap, '')) // true

