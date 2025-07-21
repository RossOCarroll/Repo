/*
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar 
Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. 
For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift 
value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. 
This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also 
equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a 
Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!
Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the 
Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, 
the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').


Input:
  - Plain text: any sequence of characters
  - Key word

Output:
  - Cypher text: a sequence of characters it has the same number of characters as the plain text
    The encrypted version of plain text

Rules:
  - Each character of the keyword is the shift value
  - Seqentialy apply the shift values to each of the alphabetic characters in the plain text
  - If the key word is 4 characters long we can group the the plain characters by segments of four
  - We will need to wrap around the text in the cypher

Data Structure:
  - A string to for the uppercase and lower case alphabets
  - Split the plain text into an array

Algorithm:
  - Initialize a ciphertext empty string
  - Initialize a keyPos variable to 0
  - Capitalize all letters in the keyword input
  - Iterate over each character in the plain text input
    - If the character is a letter in the alphabet , check if it upper or lower case
      - Locate the current keyword letter in the alphabet and store its position value in key
      - locate the current plaintext letter in the alphabet to get its position
      - step the key times from this position to the right
      - if a step goes beyond the last letter in the alphabet add another link
      - after the last step append new letter to the ciphertext
      - Add 1 to key pos and devide the result by the length of the keyword to het the remainder. 
        Set the valueof KeyPos to this remainder
    - If the character is not in the alphabet append it to ciphertext
  - Return
*/

function getEncrypted(pos, key) {
  return (pos + key) % 26;
}

function vigenereCipher(plainText, keyword) {
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lower = 'abcdefghijklmnopqrstuvwxyz';
  let cipherText = '';
  let keyPos = 0;

  plainText.split('').forEach(letter => {
    if (/[a-zA-Z]/.test(letter)) {
      if (keyPos >= keyword.length) keyPos = 0;

      let isLower = /[a-z]/.test(letter);
      let alphabet = isLower ? lower : upper;
      let letterIdx = alphabet.indexOf(letter);
      let keyLetter = keyword[keyPos];
      let keyIdx = (isLower ? lower : upper).indexOf(keyLetter);

      let encryptedPos = getEncrypted(letterIdx + 1, keyIdx + 1) - 1;
      cipherText += alphabet[encryptedPos];

      keyPos += 1;
    } else {
      cipherText += letter;
    }
  });

  console.log(cipherText);
}


vigenereCipher(`Pineapples don't go on pizzas!` , 'meat');

vigenereCipher(`Pineapples don't go on pizzas!` , 'A');
// vigenereCipher(`Pineapples don't go on pizzas!` , 'Aa');
// vigenereCipher(`Pineapples don't go on pizzas!` , 'cab');
// vigenereCipher(`Dog` , 'Rabbit');
