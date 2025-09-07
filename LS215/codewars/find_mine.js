/*
You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.

Write a function that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.

The location returned should be an array (Tuple<int, int> in C#, RAX:RDX in NASM) where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be a square (NxN), and there will only be one mine in the array.

Examples (Input --> Output)

[ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] --> [0, 0]

[ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] --> [1, 1]

[ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] --> [2, 1]


Input:
  - A 2d array of 1s and 0s
Output:
  - An array of the location of the mine

Requirements:
  - In the 2d array the mone is represented by 1
  - Iterate ever the 2d array to find the location of the the 1 [row,col]

Questions:
  - Will there be more then one mine in the matrix?
  - Will we receive an empty array


Data structure:
  - Create an array to store the row col

Algorithm:
  - Create an empty array
  - Iterate over the rows
    - Iterate over the col
      - If the row/col === 1
        - push the row an col to the array

  - return location


*/

function findMine(map) {
  let mineLocation = [];

  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[0].length; col++) {
      if (map[row][col] === 1) {
        mineLocation.push(row);
        mineLocation.push(col);
      }
    }
  }

  return mineLocation;
}


console.log(findMine([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]))// --> [0, 0]

console.log(findMine([ [0, 0, 0], [0, 1, 0], [0, 0, 0] ]))// --> [1, 1]

console.log(findMine([ [0, 0, 0], [0, 0, 0], [0, 1, 0] ]))// --> [2, 1]
