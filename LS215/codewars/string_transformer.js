/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

Input:
  - A string of words
Output:
  - A new string with the capital letter turned to lower case and the lowcase letters turned upCase

Requirements
  - Revers the order of the words in the string?

Questions:
  - Will we always get a string as an input?
  - Will we ever get an empty string?
  - Will there be any number of words?

Data structure:
  - Split the string input an array

Algorithm
  - Create an empty array
  - Split the string into an array by whitespaces
  - Iterate over the string
    create a new word variable
    - Slilit the word and iterate 
      - if the curren letter is capitalized set to lower case
      - if the current letter is lower case set to upper case
    - Ad the new word to the empty array
  - revers the words in the string and join


*/

function stringTransformer(string) {
  let result = [];

  string.split(' ').forEach(word => {
    let newWord = '';
    word.split('').forEach(letter => {
      if (letter === letter.toUpperCase()) {
        newWord += letter.toLowerCase();
      } else {
        newWord += letter.toUpperCase();
      }
    })
    result.push(newWord);
  })

  return result.reverse().join(' ');
}

console.log(stringTransformer('Example string'))//, 'STRING eXAMPLE');
console.log(stringTransformer('The Quick Brown Fox Jumped Over the Fence'))//, 'STRING eXAMPLE');