/*
🧩 Challenge 5: Longest Substring Without Repeating Characters

🧠 Problem Statement
Write a function that takes a string and returns the length of the longest substring that contains no repeated characters.

🔢 Examples
lengthOfLongestSubstring("abcabcbb")      // ➞ 3  ("abc")
lengthOfLongestSubstring("bbbbb")         // ➞ 1  ("b")
lengthOfLongestSubstring("pwwkew")        // ➞ 3  ("wke")
lengthOfLongestSubstring("")              // ➞ 0
lengthOfLongestSubstring("abcdef")        // ➞ 6

Input:
  - A string 
Output
  - A number with the longest sub string

Requirements:
  - Break the string into every possible substring
  - Find only the substring that are unique
  - Return the length of the substring that is the longest

Questions:
  - Will there always be a string as an input?
  - Should the function be case sensitive?
  - Will there be an empty string?


Data Structure: 
  - Will use a 2d array to store the sub strings
  - Will return the length in a number

Algorithm:
  - Create every sub string possible
  - Get every unique substring from the substrings
  - Convert every substring into their length
  - return the max

*/

function getSubStrings(string) {
  let subStrings = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      subStrings.push(string.slice(i, j))
    }
  }

  return subStrings;
}

function isUnique(substring) {
  const seen = new Map();

  for (i = 0; i < substring.length; i++) {
    let char = substring[i];

    if (seen.has(char)) {
      return false;
    }
    seen.set(char, true);
  }
  return true;
}

function lengthOfLongestSubstring(string) {
  if (string.length === 0) return 0;
  let subStrings = getSubStrings(string);

  let uniqueSubs = subStrings.filter(subString => {
    return isUnique(subString)
  })

  let lengths = uniqueSubs.map(str => str.length);

  return Math.max(...lengths);

}

console.log(lengthOfLongestSubstring("abcabcbb"))     // ➞ 3  ("abc")
console.log(lengthOfLongestSubstring("bbbbb"))         // ➞ 1  ("b")
console.log(lengthOfLongestSubstring("pwwkew"))        // ➞ 3  ("wke")
console.log(lengthOfLongestSubstring(""))              // ➞ 0
console.log(lengthOfLongestSubstring("abcdef"))        // ➞ 6