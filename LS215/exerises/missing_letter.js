/*
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing 
letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

Input:
  - An array of consecutive increasing letters
Output:
  - The letter that is missing from the array

Requirements:
  - Will always receive a valid array
  - There will be exsacly one letter missing
  - The length of the array will always be at least 2
  - The array will contian letters all in the same case

Questions:

Data structure:
  - Create a string alphabets for upper and lower case
  - Split substrings into arrays to compare to the input

Algorithm:
  - Create an Upper and lower cased alphabet strings
  - find the case of the input array
  - Get the first and last index of the input array as it relates to the alphabet string
  - turn the substring input an array and iterate over
    - If current char is not in the input array
      - Return current char

*/

function findMissingLetter(array) {
  const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LOWER = 'abcdefghijklmnopqrstuvwxyz';
  let substring

  if (array[0] === array[0].toUpperCase()) {
    let first = UPPER.indexOf(array[0]);
    let last = UPPER.indexOf(array[array.length - 1])
    substring = UPPER.slice(first, last + 1);
  } else {
    let first = LOWER.indexOf(array[0]);
    let last = LOWER.indexOf(array[array.length - 1])
    substring = LOWER.slice(first, last + 1);
  }

  return substring.split('').filter(letter => !array.includes(letter))[0];
}


console.log(findMissingLetter(['a','b','c','d','f'])) // e
console.log(findMissingLetter(['O','Q','R','S'])) // P