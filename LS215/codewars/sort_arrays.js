/*
Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

Input:
  - An array of strings
Output:
  - An array of strings sorted alphabetically

Requirements:
  - Given an array of string we need to return the array sorted alphabetically
  - The function should be case insensitive

Questions:
  - Will the strings always contain letters?
  - Will we get an emoty array input?
  - Will the array be any length?







*/

function doTest(arr) {
  return arr.sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
}


console.log(doTest(["Hello","there","I'm","fine"]))//, ["fine", "Hello", "I'm", "there"]);
console.log(doTest(["C", "d", "a", "B"]))//, ["a", "B", "C", "d"]);
console.log(doTest(["CodeWars"]))//, ["CodeWars"]);
console.log(doTest([]))//, []);