/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.


Input:
  - A string of words
Output:
  - The highest scoring word

Requirements:
  - In the alphabet the score of each letter a, 1 b 2 c 3 ect
  - We need to create a object that houses all the socres or an array with the index plus 1
  - If two words have the same score return the one that apprears first in the string
  - All letters will be lower case
   
Questions:
  - Will we receive an empty string?
  - Will  there be numbers in the string?
  - Will we always receive a string?

Data structure:
  - Create an alphabet string and use the index plus 1 as the score
  - Creat an object that will house the scores or an 2d array

Algorithm:
  - Create an alphabet string
  - Create an empty object to house the scores
  - Split and iterate over the input string
    - Iterate over each letter getting the score 
      - Add the word and the score to the scores object
  - Return the object with the highest score

*/

function high(string) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  let scores = {};

  string.split(' ').forEach(word => {
    let wordScore = 0
    word.split('').forEach(letter =>{
      wordScore += ALPHABET.indexOf(letter) + 1;
    })
    scores[word] = wordScore;
  })
  let highest = Math.max(...Object.values(scores));

  return Object.keys(scores).filter(word => scores[word] === highest)[0];
}

console.log(high('man i need a taxi up to ubud'))//, 'taxi');
console.log(high('what time are we climbing up the volcano'))//, 'volcano'); 
console.log(high('take me to semynak'))//, 'semynak');   
console.log(high('aa b'))//, 'aa');
console.log(high('b aa'))//, 'b');
console.log(high('bb d'))//, 'bb');
console.log(high('d bb'))//, 'd');
console.log(high('aaa b'))//, 'aaa');