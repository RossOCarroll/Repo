/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither


Input:
  - A string
Output:
  - An object

Rules
  - The returned object will have the percentages of lower case letters, uppercase letters, neither
  - The strings will include white space and other characters that should be counted as neither
  - We can assume the string will have at least one character?

Questions:
  - Will there always be one argument?
  - Could the length on the input string be any size?
  - Will there be punctuation? If so will it be included in neither?
  - 


Data structure:
  - I may divide the string in to seperate arrays
  - Strings
  - Outputing an object

Algorithm:
  - Create a lowerCase variable and assign to..
    - Match all the elements in the string that are lower case letters
      - Call lengths on the lowerCase return 
  - Create a uppercase variable and assign it..
    - Match all the upperCase letters
      - Call the length on the return
  - Create a neither variable and assign it..
    - Match all the characters in the string that are not letters
     - call length on the return

  - Get the percentages of the three categories
    - percentage = part / total * 100

  return the object { lowercase:  , uppercase: , neither: }
*/

function letterPercentages(string) {
  let lowerCase = string.match(/[a-z]/g) || 0;
  let upperCase = string.match(/[A-Z]/g) || 0;
  let neithers = string.match(/[^a-zA-Z]/g) || 0;

  let lowerCasePerc = ((lowerCase.length / string.length) * 100) || 0;
  let upperCasePerc = ((upperCase.length / string.length) * 100) || 0;
  let neitherPerc = ((neithers.length / string.length) * 100) || 0;

  return { lowercase: `${lowerCasePerc.toFixed(2)}`, uppercase: `${upperCasePerc.toFixed(2)}`, neither: `${neitherPerc.toFixed(2)}`};
}



console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
console.log(letterPercentages('Hello how are you today?'));

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }