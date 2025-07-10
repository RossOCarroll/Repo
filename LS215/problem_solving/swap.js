/*
Problem Description

Write a function called swap that takes a string as an argument, and returns a new string, where the 
alphabetic characters have taken the place of the numeric characters, and vice versa.

Input:
  - A string of numbers and letters
Output:
  - A new string with the numbers and letters swapped

Rules:
  - Swap the characters in the string where the alphabetic characters are swapped with numeric characters
  - If an empty string is input return an empty string
  - If there are fewer numbers or fewer letters. We add those characters as is
  - There maybe uppercase letters.
  - The string may contain non alphanumeric characters they should stay in place in the new string


Questions:
  - Will there be an input besides a string?
  - Will an empty string be input?
  - Will there be just one argument?
  - Will there be other characters besides letters and numbers?

EX 
("1a2b3c") === "a1b2c3")
  abc        123


Algorithm:
  - Guard Clause: if string length is 0 return an empty string.
  - Split the string into an array (chars)
    - Filter oout the letters to create a letters array
    - Filter out the number to create a numbers array
  - Map over the chars array
    - If current char is a letter and the numbers array is > 0
      - return nums.shift
    - if the current char is number and the letters array is > 0
      - return letters.shift();
    return char
*/

function isLetter(char) {
  return /[a-z]/i.test(char);
}

function isNumber(char) {
  return /\d/i.test(char);
}

function swap(str) {
  if (str.length === 0) { return '' };

  let chars = str.split('');
  let letters = chars.filter(char => isLetter(char));
  let nums = chars.filter(char => isNumber(char));

  let swapped = chars.map(char => {
    if (isLetter(char) && nums.length > 0) { return nums.shift() };
    if (isNumber(char) && letters.length > 0) { return letters.shift() };
    return  char;
   })

   console.log(swapped.join(''));
  return swapped.join('');
}


console.log(swap("1a2b3c") === "a1b2c3"); // true
console.log(swap("abcd123") === "123dabc"); // true
console.log(swap("12a") === "a21"); // true
console.log(swap("ab1") === "1ba"); // true
console.log(swap("abcd") === "abcd"); // true
console.log(swap("1") === "1"); // true
console.log(swap("123-4a#b$") === "ab3-41#2$"); // true
console.log(swap("ab1CD23") === "12a3DbC"); // true