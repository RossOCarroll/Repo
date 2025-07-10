/*
Problem Description

Implement encoding and decoding for the rail fence cipher.

The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded. It was already used by the ancient Greeks.

In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence, then moving up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.

For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:

Copy Code
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
Then reads off:

Copy Code
WECRLTEERDSOEEFEAOCAIVDEN
To decrypt a message you take the zig-zag shape and fill the ciphertext along the rows.

Copy Code
? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
The first row has seven spots that can be filled with "WECRLTE".

Copy Code
W . . . E . . . C . . . R . . . L . . . T . . . E
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
Now the 2nd row takes "ERDSOEEFEAOC".

Copy Code
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
Leaving "AIVDEN" for the last row.

Copy Code
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
If you now read along the zig-zag shape you can read the original message.

Input:
  - string message, number of rails integer

"Hi Everyone", 2

H.E.E.Y.N.
.I.V.R.O.E.

H...E
.I.V.R
..E..Y

Rules:
  - Given a string and integer return the coded string given how many rails theyre are.


- Take a string input and separate into an array of letters (no spaces).
- First letter goes in first row, second letter in second row, third letter in third ect.
- Loop through the message_char array. Push to array of arrays dependent on index.
  - Track what row receives a letter last time
    - If 1 last time the 2 this time if 3 last time 3 this time ....
      - If its not a letter then input a decimal
- Iterate through each array in the array and add decimal points (depending on array index) 
  between the characters as a join to create the string
- Print out resulting strings.


*/

function railsCipher(message, rows) {
  let sanitizedMsg = message.replace(/\s/g, '').split('');
  let railRows = [];
  let toBeInput = 0;

  for (let i = 0; i < rows; i++) {
    railRows.push([]);
  }

  for (let j = 0; j < sanitizedMsg.length; j++) {
    railRows[findRailNum(j, rows)].push(sanitizedMsg[j])
  }

  return railRows.flat().join('');
}

function findRailNum(index, rails) {
  
  if (index === 0) { return 0}
  let currentRow = 0;
  let increasing = true;

  for (let i = 0; i < index; i++) {
    if (currentRow === (rails - 1)) {
      increasing = false;
    } else if (currentRow === 0) {
      increasing = true;
    }

    if (increasing) {
      currentRow += 1;
    } else {
      currentRow -= 1;
    }
  }
  return currentRow;
}


console.log(railsCipher("WE ARE DISCOVERED FLEE AT ONCE", 3));
console.log(railsCipher("Hello Everyone", 2));