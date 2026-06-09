// Given a string, write a function, `palindromeSubstrings`, that returns
// all the substrings from the given string that are palindromes and have
// a minimum length of two.

// Input: a string of letters
// Output: an array with every possible palindrome in the given string

/*
Problem:

  Rules:
  - A palindrome is a string that is spelled the same from front to back as it is reversed
  - a substring is a portion of another string or a sequence of characters within a string
  - The function should be case sensitive a !== A

Questions:
  - Should the character in the string remain uppercase/lowercase?
    - Yes
  - How should we deal with an empty string
    - return an empty array
  - Do I assume all inputs are stings?
    - Always be a string
  - 

Data Structure:
  - An array to append palindromes too.

Algorithm:
  - Declare an result variable and initialize to an empty array.
  - Create a substring array that will contian all of the substrings from the input string.
    - That are at least 2 chars long
  - Loop through the substrings array
    - If the word is a palindrome append it to the result array
  - Return the results array




*/

function substrings(str) {
  let substrings = []
  for (let i = 0; i <= str.length; i++) {
    for (let y = 0; y <= str.length; y++) {
      let substring = str.slice(i, y);
      if (substring.length >= 2) substrings.push(substring);      
    }
  }
  return substrings;
}

function isPalindrome(substring) {
  return substring === substring.split('').reverse().join('')
}

function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach(sub => {
    if (isPalindrome(sub)) result.push(sub)
  })

  return result;
}

// Test cases:



console.log(palindromeSubstrings("supercalifragilisticexpialidocious"));
// should return: ["ili"]

console.log(palindromeSubstrings("abcDDcbA"));
// should return: ["bcDDcb", "cDDc", "DD"]

console.log(palindromeSubstrings("palindrome"));
// should log: []

console.log(palindromeSubstrings(""));
// should log: []