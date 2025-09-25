/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:

a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:

a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:

Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.

Input:
  - 2 arrays of words
Output:
  - The words in array 1 that are substrings of the words in array 2
  
Requirements:
  - We could receive

Questions:
  - Will we always recieve 2 arrays?
  - Will the arrays ever be empty or sparse?
  - Will the elements in the array be alphabetical?
  - Will we receive empty strings?

Data Structure:
  - Create an empty array to append to 

Algorithm:
  - Create an matches array 
  - Iterate over the array one 
    - Iterate over array two
      - If the subString is included in the word
        - Append to the mataches array
  - Sort the array and return

*/

function substringsIn(array1, array2) {
  let matches = [];

  array1.forEach(subString => {
    array2.forEach(string => {
      if (string.includes(subString) && !matches.includes(subString)) {
        matches.push(subString);
      }
    })
  })
  return matches.filter(substring => substring !== '').sort();
}



console.log(substringsIn(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))
// ["arp", "live", "strong"]

console.log(substringsIn(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]))
// []

console.log(substringsIn(["", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))
// ["live", "strong"]