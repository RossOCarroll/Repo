/*
Longest Palindromic Substring (Linear)

A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., 'madam' or 'racecar'. Even the letter 'x' is considered a palindrome.

For this Kata, you are given a string s. Write a function that returns the longest contiguous palindromic substring in s (it could be the entire string). In the event that there are multiple longest palindromic substrings, return the first to occur.

I'm not trying to trick you here:

You can assume that all inputs are valid strings.
Only the letters a-z will be used, all lowercase (your solution should, in theory, extend to more than just the letters a-z though).
NOTE: Quadratic asymptotic complexity (O(N^2)) or above will NOT work here.

Examples

Basic Tests

Input: "babad"
Output: "bab"
(Note: "bab" occurs before "aba")
Input: "abababa"
Output: "abababa"
Input: "cbbd"
Output: "bb"
Edge Cases

Input: "ab"
Output: "a"
Input: ""
Output: ""


Input:
  - A string of lowercased letters
Output:
  - The longest palindrome

Requirements:
  - A palindrome is a word or letters that is the same foward as it is back words
  - All the inputs would be valid strings
  - All letters a-z will be used in lower case
  - If 2 or more palindromes have are the longest return the first that occurrs

Data structure:
  - Get all the substrings
  - Filter the substrings that are palindromes
  - Find the longest sub string
  - Return the string


*/

function getPalindromes(string) {
  let palindromes = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      let substring = string.slice(i, j);
      let revSubstring = substring.split('').reverse().join('');
      if (substring === revSubstring) {
        palindromes.push(substring);
      }
    }
  }
  return palindromes;
}

function longest_palindrome(string) {
  if (string.length < 1) return '';

  let palindromes = getPalindromes(string);
  let maxSubLength = Math.max(...palindromes.map(str => str.length));
  let longestPali = palindromes.find(pali => pali.length === maxSubLength);

  return longestPali;
}


// console.log(longest_palindrome('babad'))//, 'bab'))
// console.log(longest_palindrome('madam'))//, 'madam'))
// console.log(longest_palindrome('dde'))//, 'dd'))
// console.log(longest_palindrome('ababbab'))//, 'babbab'))
// console.log(longest_palindrome('abababa'))//), 'abababa'))

// console.log(longest_palindrome('banana'))//, 'anana')
// console.log(longest_palindrome('abba'))//, 'abba')
// console.log(longest_palindrome('cbbd'))//, 'bb')
// console.log(longest_palindrome('zz'))//, 'zz')
// console.log(longest_palindrome('dddd'))//, 'dddd')

console.log(longest_palindrome(''))//, '')
console.log(longest_palindrome('abcdefghijklmnopqrstuvwxyz'))//, 'a')
console.log(longest_palindrome('ttaaftffftfaafatf'))//, 'aaftffftfaa')
console.log(longest_palindrome('bbaaacc'))//, 'aaa')
console.log(longest_palindrome('m'))//, 'm')