/*
Create a function rot13(str) that takes a string and returns a ROT13-encoded version of that string.
ROT13 is a Caesar cipher with a fixed shift of 13.
Only letters are encoded. Uppercase and lowercase must be preserved, and non-letters remain unchanged.

Input:
  - A string
Output:
  - The string but encoded using ROT13

Requirments:
  - Rot13 shifts the letters in the alphabet to the right by 13
  - the the position and plus 13 is greater then 26 then we must wrap around the aphabet
  - Cases must be preserved
  - non alphabetic characters must be preserved
  - The function returns a new string
  - If the input string is emoty return an emoty string
  - 

Questions:
  - Will the string ever be empty?
  - Will there always be a string argument or no argument?
  - Numeric strings?

Data Structure:
  - Use an empty string to compile the coded string
  - Use strings for the alphabets

Algorithm:
  - Create a upper and lower alphabets
  - Create a result var assign to an empty string
  - Iterate over input string 
    - If the string is not a letter
      - append to the result string
    - else if the letter is uppercase
      - append the return value of findLetter(char, upper)
    - else
      - append the return value of findLetter(char, upper)

findLetter
  - Find the position of the char
  - If the char is upper
    - if the position + 13 >= 26
      - subtract position + 13 - 26
      - Return the char in the new position



ABCDEFGHIJKLMNOPQRSTUVWXYZ
*/

function findLetter(char) {
  const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LOWER = 'abcdefghijklmnopqrstuvwxyz';
  
  if (char.match(/[A-Z]/)) {
    let position = UPPER.indexOf(char);

    if (position + 13 >= 26) {
      return UPPER[(position + 13) - 26];
    } else {
      return UPPER[position + 13];
    }
  } else {
    let position = LOWER.indexOf(char);
    if (position + 13 >= 26) {
      return LOWER[(position + 13) - 26];
    } else {
      return LOWER[position + 13];
    }
  }
}

function rot13(string) {

  return string.split('').map(char =>{
    if (char.match(/[^A-Za-z]/)) {
      return char;
    } else {
      return findLetter(char);
    }
  }).join('')
}


console.log(rot13("Hello, World!")) //➞ "Uryyb, Jbeyq!"
console.log(rot13("Uryyb, Jbeyq!")) //➞ "Hello, World!"
console.log(rot13("JavaScript"))    //➞ "WninFpvcg"
console.log(rot13("ROT13"))         //➞ "EBG13"
console.log(rot13("")) // ''