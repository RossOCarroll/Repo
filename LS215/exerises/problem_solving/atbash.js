/*
The Atbash cipher is a classic substitution cipher where each letter in the alphabet is replaced with its 
opposite:

A ↔ Z
B ↔ Y
C ↔ X
...
M ↔ N
Your task is to implement a function atbash(str) that returns the Atbash-encoded version of the input string.

A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

Input:
  - A string
Output:
  - A new string that is the input string encoded with the atbash cipher

Requirements
  - The at bash cipher replaces each letter with the letters opposite
  - A ↔ Z  index 0 ->  + 1 - the length of the alphabet
  - The case and the none alphabetic characters must be preserved
  - Encodeing anDecodeing are the same
  - Empty String should return ''

Questions:
  - Will the input always be a string?
  - Will there always be one argument?

Data structure:
  - An empty string to compile th characters to
  - Upper and lower case alphabets

Algorithm:
  - Create upper and lower case alphabet strings
  - Create an empty string to return
  - Iterate over the input string
    - If the char is not a letter add to the result
    - If the char is uppercase
     - Get the position of the char from the alphabet
     - Get the new char by (alpha.length - (position + 1))
     - Add to the result
    - Repeat the steps above for lower case
  - return result
*/

const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';

function atbash(string) {
  let result = '';

  result = string.split('').map(char => {
    if (char.match(/[^a-zA-Z]/)) {
      return char;
    }

    if (char.match(/[A-Z]/)) {
      let position = UPPER.indexOf(char);
      return UPPER[UPPER.length - (position + 1)];
    } else {
      let position = LOWER.indexOf(char);
      return LOWER[LOWER.length - (position + 1)];
    }
  })

  return result.join('');

}




console.log(atbash("abc")) //➞ "zyx"
console.log(atbash("Hello, World!")) //➞ "Svool, Dliow!"
console.log(atbash("Gsrh rh zm vcznkov!"))//➞ "This is an example!"
console.log(atbash("")) // ''

