/*
Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.


Input:
  - A string and a number
Output:
  - A string that been coded by the caesar cipher

ABCDEFGHIJKLMNOPQRSTUVWXYZ

Requirements:
  - Geven the key which is the number that shifts the letter to the right
  - If the key + position in the is greater then the the size of the alphabet we wrap the position
    - key + position > 26 (0 based index)
      - 16 + 12 = 28 - 26 = 2 === C
      - 0 + 47 = 47 - 26 = 21 === V
      - 19 + 5 = 24 === Y
      - 23 + 5 = 28 - 26 = 2
  - the letters need to be the same case as what was input
  - Non alphabetic characters should
  - Make an upper and lower alphabets
  - Iterate over the input string
    - determine the its upper or lower case 
      - Find the position of the char
       - Sub sub the char

Data Structure:
  - Create an empty string to add characters to
  - Iterate over the input string

Algorithm:
  - codeCipher(letter, case, key)
    - Find the position of the letter
     - if key + position > 26 
      - sub 26 and return the position frim the alphabet
    - else 
      - key + position is the new position


  - Create upper case and lower case alphabets
  - Create an empty string coded
  - Iterate over the input string
    - If the current char is not a letter
      - add current to coded
    - If the current char is uppercase
     - add current char return codeCipher with upper to coded
    - If current char is lowercase
      - add the return of char and lower to coded
  - Return coded

*/

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz"

function codeCipher(char, key, c) {
  if (c === 'upper') {
    let position = UPPER.indexOf(char);

    if (position + key >= 26 ) {
      let newPosition = (position + key) - 26;
      return UPPER[newPosition];
    } else {
      return UPPER[position + key];
    }

  } else {
    let position = LOWER.indexOf(char);
    
    if (position + key >= 26 ) {
      let newPosition = (position + key) - 26;
      return LOWER[newPosition];
    } else {
      return LOWER[position + key];
    }
  }
}

function caesarEncrypt(string, key) {
  let coded = '';

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (char.match(/[^a-zA-Z]/)) {
      coded += char;
    } else if (char.match(/[A-Z]/)) {
      coded += codeCipher(char, key, 'upper');
    } else {
      coded += codeCipher(char, key, 'lower');
    }
  }

  return coded;

}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"