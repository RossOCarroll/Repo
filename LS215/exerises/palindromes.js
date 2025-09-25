/*
 Write a function that takes a string and returns an array of all its substrings that are palindromes. The 
 order of the palindromes in the returned array doesn't matter.
 
 Input:
  - A string

Output:
  - Al the palindromes that can be made from the string in an array

Questions:
  - A palindrome is a string that is the same fowards as it is back wards?
  - Are single letters concidered palindromes?
  - will we get a empty sting as an input?
  - Will there be other chars beside letters in the strings?
  - Will we get any other arguments besides strings?

Data Structure:
  - Create an empty array to append palindromes too

Algorithm:
  - Create a empty string 
  - Iterate over the input string
    - Iterate for a index plus 1
      - get the sub string from index1 to index 2
      - if the sub string is the same fowards as it is backward and length creater then 1
        - Add to the palindromes array
  - return palindromes array
*/

function isPalindrome(string) {
  return string.slice().split('').reverse().join('') === string && string.length > 1;
}


function findPalindromicSubstrings(string) {
  let palindromes = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      let substring = string.slice(i, j);

      if (isPalindrome(substring)) {
        palindromes.push(substring);
      }
    }
  }

  return palindromes;
}


console.log(findPalindromicSubstrings("abba"));
// ["bb", "abba"]

console.log(findPalindromicSubstrings("racecar"));
// ["cec","aceca","racecar"]

console.log(findPalindromicSubstrings("madam"));
// ["ada","madam"]

console.log(findPalindromicSubstrings("noon"));
// ["oo","noon"]

console.log(findPalindromicSubstrings("levelup"));
// ["eve","level"]

console.log(findPalindromicSubstrings("kayakstats"));
// ["aya","kayak","tat","stats"]