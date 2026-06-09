// Given a string `str`, reverse all the consonants in the
// string and return it. Consonants are all alphabetic characters
// except for the vowels `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`,
// which can appear in both lower and upper cases.
// The consonants can appear more than once in the string.

/*
Input: 
  - a string of letters

Output:
  - a string with all  the consonants reversed

Explicit:
  - Consonants are every other letter besides vowels 'a', 'e', 'i', 'o', 'u';
  - So the vowels should stay in place
  - skip the index if the current element is th same
  - letters appear in both upper and lower case
  - Consonants can appear more then once

Implicit: 
  - case insensitive
  - an empty string should return an empty string

Questions:
  - Will we always get an input of a string of numbers?
  - Will the input string have any spaces or non-letter chars?

Data structure;
  - Strings return a string

Algorithm:
  - Create a vowels constant to check against the current elements
  - Iterate over the string
    - Iterate over the string
      - If the indexs equal then skip;
      - If either letter is a vowel skip
      - else swap the letters in the string;
  - return string

*/

// function isVowel(letter) {
//   const VOWELS = ['a', 'e', 'i', 'o', 'u'];
//   return VOWELS.includes(letter.toLowerCase())
// }

// function reverseConsonants(str) {
//   let arr = str.split('');

//   for (let idx1 = 0; idx1 < arr.length; idx1++) {
//     for (let idx2 = idx1 + 1; idx2 < arr.length; idx2++) {
//       if (isVowel(arr[idx1]) || isVowel(arr[idx2])) continue;

//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     }
//   }

//   return arr.join('');
// }

// function isVowel(letter) {
//   const VOWELS = ['a', 'e', 'i', 'o', 'u'];
//   return VOWELS.includes(letter.toLowerCase())
// }

// function reverseConsonants(str) {
//   let arr = str.split('');
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     if (isVowel(arr[start])) {
//       start++;
//     } else if (isVowel(arr[end])) {
//       end--;
//     } else {
//       [arr[start], arr[end]] = [arr[end], arr[start]];
//       start++;
//       end--;
//     }
//   }
//   return arr.join('');
// }

// console.log(reverseConsonants("") === "");
// console.log(reverseConsonants("s") === "s");
// console.log(reverseConsonants("HELLO") === "LELHO");
// console.log(reverseConsonants("leetcode") === "deectole");
// console.log(reverseConsonants("example") === "elapmxe");
// console.log(reverseConsonants("Consonants") === "sotnonasnC");

// All test cases should log true


// Given a sorted array of integers, your task is to implement
// a function `compressToDistinct` that modifies the array
// in-place to ensure it starts with a sequence of distinct
// elements in their original order. After making these
// modifications, the function should return the count of
// these distinct elements.

// The elements in the latter part of the array, after the
// distinct ones, are not important.

// Example:

// If the input array is [3, 3, 5, 7, 7, 8], there are four
// distinct elements: 3, 5, 7, and 8. After modifying the array
// to place these distinct elements at the beginning, the
// resulting array should look like this -> [3, 5, 7, 8, _, _].
// The underscores (_) represent the elements that are no
// longer important.

// You should name the function `compressToDistinct` for the
// tests to work correctly.


/*
Input:
  - An array of numbers
Output:
  - An array with distinct elements with underscores for the duplicates

Algorithm:
  - Iterate over the array ele 1
    - Iterate over the array ar idx1 + 1 ele 2
      - if ele 1 === ele 2 
        - splice ele2
        - push underscore to end of array

  - return array


*/


// function compressToDistinct(arr) {
//   for (let idx1 = 0; idx1 < arr.length; idx1++) {
//     for (let idx2 = idx1 + 1; idx2 < arr.length; idx2++) {
//       let ele1 = arr[idx1];
//       let ele2 = arr[idx2];

//       if (ele1 === ele2) {
//         arr.splice(idx2, 1);
//         idx2--;
//       }
//     }
//   }
//   console.log(arr);
//   return arr.length;
// }

function compressToDistinct(arr) {
  let anchor = 0;

  for (let runner = 1; runner < arr.length; runner++) {
    if (arr[anchor] !== arr[runner]) {
      anchor++
      arr[anchor] = arr[runner];
    }
  }
  return anchor + 1;
}

function testCompressToDistinct(array, expectedLength) {
  const originalReference = array;
  const resultLength = compressToDistinct(array);
  const isSameObject = originalReference === array;
  const isLengthCorrect = resultLength === expectedLength;
  const isModifiedCorrectly = array
    .slice(0, expectedLength)
    .every((val, idx, arr) => idx === 0 || val > arr[idx - 1]);

  return isSameObject && isLengthCorrect && isModifiedCorrectly;
}

console.log(testCompressToDistinct([3, 3, 5, 7, 7, 8], 4));
console.log(testCompressToDistinct([1, 1, 2, 2, 2, 3, 4, 4, 5], 5));
console.log(testCompressToDistinct([0], 1));
console.log(testCompressToDistinct([-5, -3, -3, -1, 0, 0, 0, 1], 5));
console.log(testCompressToDistinct([6, 6, 6, 6, 6, 6, 6], 1));

// All tests should log true.