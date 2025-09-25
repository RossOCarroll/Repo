/*
Write a function that takes an array of strings and returns an object where the keys are string lengths and 
the values are arrays of strings of that length.


Input:
  - An array of strings
Output:
  - An object where the keys are the string lengths and the values are an array of those strings with that length

Requirements:
  - There could be muiltple strings with the same length that should be added to the value array
  - We could revieve an empty array as an input
  - Some string may be empty, they go under the 0 length
  - Will always recieve an array as an input
  - String may contian any number of chars

Questions:
  - Will we get an empty array as an input?
  - Will the strings be empty?
  - Will we get an input besides an array?
  - Will the array be sparse?
  - Will there be chars other then letters?


Data Structure:
  - Ill need to create an empty object to insert the lengths and the array of words to

Algorithm:
  - Create an empty object
  - Iterate over the input array
    - Get the string length
    - If the current string length is in the object
      - append the current string to the value array in that object
    - else 
      - Add the string length and the current string in an array
  - Return our lengths object



*/

function countStrings(strings) {
  let stringLengths = {};

  strings.forEach(string => {
    let length = string.length;

    if (stringLengths[length]) {
      stringLengths[length].push(string);
    } else {
      stringLengths[length] = [string];
    }
  })

  return stringLengths;
}


console.log(countStrings(['Hello', 'World']))
// {5: ['Hello', 'World']}

console.log(countStrings(['', 'Hi', 'Bob']))
// {0: [''], 2: ['Hi'], 3: ['Bob']}

console.log(countStrings([]))
// {}

