/*
Create a function vigenereEncrypt(message, keyword) that encrypts a given message using the Vigenère cipher.

The Vigenère cipher is a method of encrypting alphabetic text by using a repeating keyword to determine 
letter shifts. Each letter in the keyword determines how far to shift each letter of the message.


Input:
  - A string
  - A string that is the key
Output:
  - a string that is encrypted

ABCDEFGHIJKLMNOPQRSTUVWXYZ

Requirements:
  - The key word is will be how the letters are shifted in the cipher
  - H(7), k(10) => 10 + 7 = 17(R)
  - Must user a wrap around if the key and position is > 26
  - Case and other characters must be preserved
  - If the message is empty return an empty string

Questions:
  - Will there always be a string and a key string input?
  - Will either ever be empty?

Data structure:
  - Create a empty string to append too
  - Create string alphabets for upper and lower case

Algorithm:
  - Create alphabets for upper and lower case
  - Create a result string
  - create a keyIndex = 0
  - Iterate over the message string
    - get the position of the of the current string index of alphabet
    - get the position of the current key string 
     - new position is key position + current position
      - If new position >= 26 minus 26 from the new position
    - append the result with aphabet[newposition]
    - keyIndex + 1
    - If key Index > then keyword.length 
      - keyIndex = 0
  - return result
*/

const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LOWER = 'abcdefghijklmnopqrstuvwxyz'

function findChar(charPos, keyPos, c) {
  if (c === 'upper') {
    if (charPos + keyPos >= 26) {
      return UPPER[(charPos + keyPos) - 26];
    } else {
      return UPPER[charPos + keyPos];
    }
  } else {
    if (charPos + keyPos >= 26) {
      return LOWER[(charPos + keyPos) - 26];
    } else {
      return LOWER[charPos + keyPos];
    }
  }
}

function vigenereEncrypt(message, keyword) {
  let result = '';
  let keyIndex = 0;

  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    if (char.match(/[^A-Za-z]/)) {
      result += char;
    } else {
      if (char.match(/[A-Z]/)) {
        let charPos = UPPER.indexOf(char);
        let keyPos = UPPER.indexOf(keyword[keyIndex].toUpperCase())

        result += findChar(charPos, keyPos, 'upper')
      } else {
        let charPos = LOWER.indexOf(char);
        let keyPos = LOWER.indexOf(keyword[keyIndex].toLowerCase())

        result += findChar(charPos, keyPos, 'lower')
      }
      keyIndex = (keyIndex + 1) % keyword.length;
    }
  }
  return result;
}


console.log(vigenereEncrypt("ATTACKATDAWN", "LEMON")) //➞ "LXFOPVEFRNHR"
console.log(vigenereEncrypt("Hello, World!", "key"))  //➞ "Rijvs, Uyvjn!"
console.log(vigenereEncrypt("This is a secret!", "abc")) //➞ "Tijs jt b sfdsgu!"
console.log(vigenereEncrypt("", "abc")) //➞ ""
