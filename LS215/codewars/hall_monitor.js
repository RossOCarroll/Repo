/*
A floor plan is arranged as follows:

You may freely move between rooms 1 and 2.
You may freely move between rooms 3 and 4.
However, you can enter the hallway to move between rooms 2 and 4.
Floor Plan

Create a function that validates whether the route taken between rooms is possible. The hallway will be given as the letter "H".

Input:
  - An array that represents movements through rooms and a hallway
Output:
  - true or false depending on if you can make the movements given

Requirements
  - rooms 1, 2 and 3, 4 you can move freely together, 2 and 4 can move into the hallway and the hallway you can go to
   2 or 4
  - Routes begin in any room
  - There will be no inputs besides the rooms given
  - No rooms will be repeated


Algorithm:
  - Iterate through the input array
    - Get the next room
    - If the room current room 1 the next room has to be 2
    - If the current room is the next room has to be 2 or 'H' 
    - If the current room is 'H' the next room has to be 2 or 4
    - If the current room us 4 the next room has to b 'H' or 3
    - If the current room is 3 the next room has to be 4



*/

function possiblePath(rooms) {
  for (let i = 0; i < rooms.length; i++) {
    let currentRoom = rooms[i];
    let nextRoom = rooms[i + 1];
    if (nextRoom === undefined) continue;
    
    if (currentRoom === 1 && nextRoom !== 2) {
      return false;
    } else if (currentRoom === 2 && (nextRoom !== 1 && nextRoom !== 'H')) {
      return false;
    } else if (currentRoom === 'H' && (nextRoom !== 2 && nextRoom !== 4)) {
      return false;
    } else if (currentRoom === 4 && (nextRoom !== 3 && nextRoom !== 'H')) {
      return false;
    } else if (currentRoom === 3 && nextRoom !== 4) {
      return false;
    }
  }
  return true;
}

console.log(possiblePath([1, 2, "H", 4, 3])) //➞ true

console.log(possiblePath(["H", 1, 2])) //➞ false

console.log(possiblePath([4, 3, 4, "H", 4, "H"])) //➞ true

console.log(possiblePath([3, 4, 2])) // false
console.log(possiblePath(["H", 2, 1, 2, 'H', 4, 3])) // true
