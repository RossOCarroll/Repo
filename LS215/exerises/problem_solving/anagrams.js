/*

Write a function that checks if two strings are anagrams of each other. Two words are anagrams if they 
contain the same characters in a different order, ignoring case and non-letter characters 
(like spaces or punctuation).

Input:
  - 2 strings
Output:
  - True or false depending on if the 2 strings are anagrams

Requirements:
  - Ignore the case
  - Ignore whitespace and punctuation
  - Remove all non alphabetic characters from the 2 strings
  - Sort the strings and compare

Questions:
  - Will we always recieve 2 strings?
  - Will any of ther string be empty?
  - Will the strings contain numeric charaters?


Data Structure:
  - Will turn strings into arrays

Algorithm:
  - Clean both strings of non alphabetic characters
    - Replace each non alphabetic charater with an empty string
  - Sort either string
  - Compare the strings
*/

function isAnagram(string1, string2) {
  string1 = string1.replace(/[^A-Za-z]/g, '').toLowerCase();
  string2 = string2.replace(/[^A-Za-z]/g, '').toLowerCase();

  sorted1 = string1.split('').sort().join('');
  sorted2 = string2.split('').sort().join('');

  if (string1.length === 0 && string2.length === 0) return false;

  return sorted1 === sorted2;
}

console.log(isAnagram("listen", "silent"))          // true
console.log(isAnagram("Astronomer", "Moon starer"))  // true
console.log(isAnagram("Hello", "Olelh!"))            // true
console.log(isAnagram("Test", "Taste"))              // false
console.log(isAnagram("123", "321"))                 // false
