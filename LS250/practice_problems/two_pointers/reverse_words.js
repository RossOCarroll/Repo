/*
You are given a sentence represented by a string str. Your objective is to reverse all the characters in 
each word of the sentence while ensuring that the case of each character remains unchanged. The spaces 
between words should be preserved as they are, and the overall order of the words in the sentence must 
not be altered.

You should solve the problem without using the Array.prototype.reverse method.

Input:
  - A string of letters
Output:
  - the string reversed

Problem:
  - Given a string we should output the string in reverse

Explicit:
  - Ensure the chars keep there case
  - ensure that the space inbetween the words are intact
  - The overall words in the sentences must not be altered

Implicit:
  - 

Data structure:
  - Start/end pointers
  - Split the word into an array

Algorithm:

  - Split the word into an array
  - Iterate over the array

  - Declare a start variable set to 0
  - Declare an end variable set to word length
  - While start is less then end
    - swap the char at index start with the char at index end
  - Return the revered word

  - Join the new array with ' ' 


*/

function charSwap(word) {
  let arr = word.split('');
  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++;
    end--;
  }

  return arr.join('');
}

function reverseWords(str) {
  let wordArr = str.split(' ');
  let reversed = [];

  wordArr.forEach(word => {
    reversed.push(charSwap(word));
  });

  return reversed.join(' ');
}


console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");