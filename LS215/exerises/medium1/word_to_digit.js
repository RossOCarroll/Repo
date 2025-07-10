/*
Write a function that takes a sentence string as an argument and returns that string with every occurrence of 
a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted 
to its corresponding digit character.

Input:
  - String that contains numbers spelled out

Output:
  - A new  string with the numbers represented as numerical strings

Rules:
  - Convert the numbers in letters to numbers as strings
  - Keep the string intact
  - Periods could be in the string
  - Account for punctuation 

Questions:
  - Are we returning a new string or the same string?
  - Will the numbers be in lower case or varying cases?
  - Will a string always be input?
  - Will there be more than one argument?
  - Will there be no arguments?
  - Will there be different types of punctuation?
  - Will the string contain other types of characters?

Data structure:
  - Strings
  - Split into an array
  - object for the conversion

Algorithm:
  - Create an object with the numbers in letters and the values as numbered strings
  - Split the string by whitespace
    - Use regex /[.!,?]/
  - Map over the string
    - If the string matches any of the keys
      - Return the value of the matching key
    - If the word contains a punctuation at the last index return the word
      - save the punctuation
      - return the word with concatenated with the punctuation
    - Return word concatenated with white space



*/

const DIGITS = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9'
};

function wordToDigit(string) {
  Object.keys(DIGITS).forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    string = string.replace(regex, DIGITS[word]);
  });

  console.log(string);
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
