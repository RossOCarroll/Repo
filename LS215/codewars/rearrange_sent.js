/*
Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.

Examples

rearrange("is2 Thi1s T4est 3a") ➞ "This is a Test"

rearrange("4of Fo1r pe6ople g3ood th5e the2") ➞ "For the good of the people"

rearrange(" ") ➞ ""

Input:
  - A string with letters and numbers
Output:
  - The string rearranged with each number in the word is the new place in the string

requirements:
  - The numbers are not 0 based index
  - A string with no words should return an empty string
  - The numbers will be from 1-9

Questions:
  - Will there always be a string input?
  - Will the string always have 9 or less words?
  - Will there be no input?

Data Structure:
  - Create an array of empty string to place the new words to

Algorithm:
  - Create and array of empty strings with the length of the input string
  - split the string into words and iterate over the array
    - For each word in the array
      - save the word without the number
      - Iterate over each word
        - Get the number in the word
      - Place the word to the index number
  - Return joined string


*/

function getArray(length) {
  result = [];

  for (let i = 0; i < length; i++) {
    result.push('');
  }
  return result;
}


function rearrange(string) {
  string = string.trim();
  if (!string) return '';

  let stringLength = string.split(' ').length;
  let wordsArray = getArray(stringLength);

  string.split(' ').forEach(word => {
    let number = Number(word.match(/\d/g)) - 1;
    word = word.replace(/\d/g, '');

    wordsArray[number] = word;
  })
  
  return wordsArray.join(' ');
}

console.log(rearrange("is2 Thi1s T4est 3a")) //➞ "This is a Test"

console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2")) //➞ "For the good of the people"

console.log(rearrange(" ")) //➞ ""

