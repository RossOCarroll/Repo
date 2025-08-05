/*

The Rail Fence Cipher is a form of transposition cipher. It writes the message in a zigzag pattern across a 
set number of “rails” (rows), then reads it row by row.

🔠 Example (3 Rails, message = "WEAREDISCOVEREDFLEEATONCE"):
Written in rails:

W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
Read row by row:

"WECRLTEERDSOEEFEAOCAIVDEN"

Write a function railFenceEncode(message, rails) that returns the encoded message using this zigzag pattern.

Input:
  - a message to be encoded
  - The number of rails to be used
Output:
  - A string with the encoded message

Requirements:
  - Given the string message and the number of rails we need to transpose the message in a zig zag pattern
    across the rails
  - 

Questions:
  - Will the rails given be 2 or greater?
  - Will we always recieve 2 arguments a number and a string?
  - Should whitespace or punctuation be preserved
  - Should we preserve letter case?

Algorithm:
  - Create a rails map, and array of empty strings 
  - Track the current rail and direction
    - railCount starts at 0
    - direction is 1 for down -1 for up
  - Loop through each character in the message
    - add the character to the current rail
      - If at the bottom rail reverse the direction railDirection = -1
      - If at the top rail reverse direction railDirection = 1
      - Move to teh next rail based on direction
  - join the strings together



*/


function railFenceEncode(message, railCount) {
  let rails = Array(railCount).fill('').map(() => "");
  let currentRail = 0;
  let railDirection = 1;

  for (let i = 0; i < message.length; i++) {
    let char = message[i];

    rails[currentRail] += char;

    if (currentRail === 0) {
      railDirection = 1;
    } else if (currentRail === railCount - 1) {
      railDirection = -1;
    }

    currentRail += railDirection;
  }

  console.log(rails.join(''))
}


railFenceEncode("WEAREDISCOVEREDFLEEATONCE", 3)
// ➞ "WECRLTEERDSOEEFEAOCAIVDEN"

railFenceEncode("Hello, World!", 3)
// ➞ "Hoo!el,Wrdl l"

railFenceEncode("Hello", 2)
// ➞ "Hloel"