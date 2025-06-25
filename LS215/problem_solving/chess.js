/*
In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal. Positions on 
the board equate to coordinate numbers. Given a set up like so:

_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ W _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ B _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _

The white queen's position equates to (2, 3) and the black queen is at (5, 6). In this example the queens 
are on the same diagonal, and therefore can attack each other.

Write a function which, given a string representation of the board with the two queens, returns true or false 
depending on whether the queens can attack each other or not.

Problem 
- Input:
  - A string representation of of a board with two queens
- Output:
  - True or False based on if the queen can attack each other
- Rules:
  - queens coordinates are represented as (row, column)
    - The row and column are 0 based indexes
  - The queens can attack each other if they are on the same row, diagonal or column.
    - same row - would have the same row coordinate, (3, 5) and (3, 2)
    - same column - (3, 5) and (4, 5)
    - same diagonal - difference between row numbers == difference between column numbers. (2, 3) and (5, 6)
  - Board is 8 x 8 - (0 -7)
  - We only have queens on the board
  - Queens are 'B' and 'W' for white queen
  - Queens may be missing
    - return undefined if one or both queens are missing

  - We will always be given a board

Test Cases / Examples

Data Structure:

[
  '________',
  '________',
  '________',
  '________',
  '________',
  '________',
  '________',
]

Coordinates:
[2, 3]

Algorithm:
Hight Level:
  - parse board into the correct data structure
  - Find the queens locations with in the board
  - Stop if we dont have both queens
  - Determine if the queens can attack each other based on their coordinates

Helper: queenCoordinates(board) => { 'W' => [2, 3], 'B' => [5, 6] }
- initializing an empty object, 'coordinates'
- Iterate over the string elements of board using an index -> `row`, `rowIndex`
- For each string (row):
  - Check if 'B' is in the current string
  - If it is:
    - Add the 'B' key to coordinates
    - Set the value to a coordinates pair: [`rowIndex, index 'B' in the current row] (indexOf)
  - Check if 'W' is in the current row
  - If it is:
    - Add 'W' to `coordinates`
    - Set the value to a coordinate pair: [`rowIndex, index 'W' in the current row] (indexOf)
  - return coordinates


Helper: attackableCoordinates(coordinate1, coordinate2) => true/false
1. Check if coordinates are in the same row
  - If the fist element in both arguments is the same return true

2. Check if coordinates are in the same column
  - If the second element in both arguments is the same return true

3. Check if coordinates are in the same diagonal
  - If the difference between the first elements is the same and the difference between the second elements is the same
  - Return true

  1. parse board into the correct data structure
    - split the input string based on the newline characters

  2. Find the queens locations with in the board
    - Use queenCoordinates, passing in out board, and get back out object with coordinates

  3. Stop if we don't have both queens
    - If our coordinates object doesn't have a 'B' key and a 'W' key, return undefined

  4. Determine if the queens can attack each other based on their coordinates
    - Invoke attackable coordinates passing in our two coordinate values as arguments
    - return this return value

*/
function queensCoordinates(board) {
  let coordinates = {};

  board.forEach((row, rowIndex) => {
    row.split('').forEach((col, colIndex) => {
      if (col === 'W') {
        coordinates['W'] = [rowIndex, colIndex];
      } else if (col === 'B') {
        coordinates['B'] = [rowIndex, colIndex];
      }
    })
  })

  return coordinates;
}

function attackableCoordinates(coordinate1, coordinate2) {
  let difference1 = Math.abs(coordinate1[0] - coordinate2[0]);
  let difference2 = Math.abs(coordinate1[1] - coordinate2[1]);

  if (difference1 === difference2) {
    return true;
  } else if (coordinate1[0] === coordinate2[0]) {
    return true;
  } else if (coordinate1[1] === coordinate2[1]) {
    return true;
  }

  return false;
}

function queenAttack(inputString) {
  let board = inputString.split('\n');
  let coordinates = queensCoordinates(board);

  if (!coordinates['B'] || !coordinates['W']) {
    return undefined;
  }

  return attackableCoordinates(coordinates['W'], coordinates['B'])
}

//Diagonal Attacks
console.log(queenAttack("________\n" +
                        "________\n" +
                        "___W____\n" +
                        "________\n" +
                        "________\n" +
                        "______B_\n" +
                        "________\n" +
                        "________\n" ) === true);
console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "_B______\n" +
                        "W_______\n" ) === true);

// Row Attacks
console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "_B____W_\n" +
                        "________\n" ) === true);
console.log(queenAttack("BW______\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" ) === true);

// // column Attacks
console.log(queenAttack("________\n" +
                        "_____W__\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "_____B__\n" +
                        "________\n" +
                        "________\n" ) === true);

console.log(queenAttack("B_______\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "W_______\n" ) === true);

// //No Attack
console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "__B_____\n" +
                        "W_______\n" ) === false);
console.log(queenAttack("________\n" +
                        "________\n" +
                        "______W_\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "____B___\n" +
                        "________\n" ) === false);
console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "_______B\n" +
                        "W_______\n" ) === false);

// Edge Cases
console.log(queenAttack("________\n" +
                        "________\n" +
                        "______W_\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" ) === undefined);
console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "B_______\n" +
                        "________\n" +
                        "________\n" ) === undefined);
console.log(queenAttack("________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" +
                        "________\n" ) === undefined);