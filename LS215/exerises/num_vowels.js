/*
Write a function that takes a string and returns the number of vowels in the string.



Input:
  - A string
Output:
  - A number that represents the vowels in the input string

Requirements:
  - There will be and empty string and should return a empty string return 0
  - There will always be a string as an input
  - String can contain can any chars
  - The string will be any length
  - 

Questions:
  - Will we always receive a string as an argument?
  - Will we get an empty string?
  - Will the string contain characters other then letters?
  - Will the string be any length?
  - Will we get more than one input?
  - Will we get no inputs?
  - Should the function be case insenitive?

Data Structure:
  - Iterate over the input string and use and integer as a counter

Algorithm:
  - Create a counter set to 0
  - Iterate over the string
    - If the current char is a vowel 
      - Increment the counter
  - Return the counter

*/

function countVowels(string) {
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[aeiouAEIOU]/)) {
      counter++;
    }
  }

  return counter;
}



console.log(countVowels('The quick brown fox jumps over the fence.'))// 11
console.log(countVowels('Hello World'))// 3
console.log(countVowels('')) // 0