/*
Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest 
ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which 
each letter in a plaintext is substituted by the letter located a given number of positions away in the 
alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the 
letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be 
decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as 
is. The substituted letters are in the same letter case as the original letter. If the key value for shifting 
exceeds the length of the alphabet, it wraps around from the beginning.

Input:
  - A string of letters
  - a number representing the encrytion key

Output:
  - The coded string

Rules:
  - The encryption key shifts the letter to the right n number of places
  - If the number will wrap around to the start of the alphabet
  - Only letters are encrpted not characters
  - The cypher is case sensitive

Mental model:
  Wrap around
  - if position + key > 26 
    - encrypted position is position + key - 26

Questions:
  - Will there always be a string input and a number input?
  - Will there be an empty string input? 
  - Will there be a negative number input?
  - Will ther be more then 2 arguments? no arguments?

Data structure:
  - Create objects for the alphabet with numbers as the keys and letter as the values
  - Use and emopty string to add each encrypted letter

Algorithm:
  - Create the alphabet objects
    - Helper alphabet map
      - loop from 1-26
        - get the string charcode for upper:  and lower:
        - object[1][upper]/[lower] = letter
  - Create an empty string to append to 
  - iterate over the input string
    - if the current character is not a letter
      - continue
    - if the current position + key > 26
      - encrypted position is position + key - 26
    - else enctpeted position is position + key
    - if the letter is uppercase
      - encryptedString << alphaMap[encryptedPosition][upper]
    - else
      - encryptedString << alphaMap[encryptedPosition][lower]
  - return 
alphaMap[3]['upper']
*/
const LOWER = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26
}

const UPPER = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26
}

function createAlphaMap() {
  const map = {};

  for (let i = 1; i <= 26; i++) {
    const lower = String.fromCharCode(96 + i); // 'a' to 'z'
    const upper = String.fromCharCode(64 + i); // 'A' to 'Z'

    map[i] = { lower, upper };
  }

  return map;
}

function getEncrypted(pos, key) {
  if (pos + key > 26) {
    return ((pos + key) - 26)
  } else {
    return pos + key
  }
}


function caesarEncrypt(text, key) {
  const alpha = createAlphaMap();
  let encryptedText = '';

  for(let i = 0; i < text.length; i++) {
    let encryptedPosition;
    let currentPosition;
    if (/[^a-zA-Z]/.test(text[i])) {
      encryptedText += text[i];
      continue;
    }

    if (/[a-z]/.test(text[i])) {
      currentPosition = LOWER[text[i]];
      encryptedPosition = getEncrypted(currentPosition, key);
      encryptedText += alpha[encryptedPosition]['lower']
    } else {
      currentPosition = UPPER[text[i]]
      encryptedPosition = getEncrypted(currentPosition, key);
      encryptedText += alpha[encryptedPosition]['upper']
    }
  }
  console.log(encryptedText);
}

// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// // wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
"Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

