/*

Create a function that determines if two strings are anagrams (contain the same letters in any order).

Input:
  - 2 strings of letters
Output:
  - Boolean that represents if the two strings are anagrams

Questions:
  - Will we always receive 2 strings as inputs?
  - Will we receive an empty strings?
  - Will the string onle contian alphabetic letters?
  - Will the strings be different lengths?


Requirements:
  - We will always receive 2 strings
  - The strings maybe empty
  -0 strings only contain alphabetic letters
  - If the strings are different lengths then we return false

Data Structure:
  - Sort the strings

Algorithm:
  - Down case both strings
  - Copy both string and sort and compare.


*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().split('').sort();
  str2 = str2.toLowerCase().split('').sort();

  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) return false;
  }

  return true;
}


console.log(isAnagram('Hello', 'elHol')) //true
console.log(isAnagram('', 'abc')) // false
console.log(isAnagram('Wonderwall', 'derallwonw')) // true