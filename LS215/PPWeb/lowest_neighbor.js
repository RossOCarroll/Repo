/*
Create a function that returns the lowest neighbor of a given (x, y) coordinate element 
in a 2D array. The function will be passed three parameters.

 arr,  x,  y
arr will be a 2D array holding integer values and will always be symmetrical in size (e.g.
 2x2, 3x3, 4x4).
x will hold the row coordinate, while y will hold the column coordinate.

You will have to check the horizontal, vertical and diagonal neighbor elements. If there 
isn't any lower neighbors, return the value of the given (x, y) coordinate.

Input:
  - A 2d array than an x and y corodinate in the array
Output:
  - The lowest number that is one space away from the target

  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
target [0, 0]

[0, 0], [0, 1], [0, 2]
[1,0] [1, 2]
[2, 0][2, 1][2, 2]

Requirements:
  - Ill have to find all the numbers that are right next to the target
  - Return the lowest number
  -

Questions:
  - Will there always be a 2d array input?
  - Will sub arrays always have numbers?


Algorithm:
  - Create a 2d array of all the coordinaces in the grid
  - Iterate over the the coordinances
    - filter the coordinaces that are 1 step away from 
      - index === x - 1 || x + 1 && index === y - 1 || y + 1
  - Get the neighbors in an array
  - return the min in the array
*/

function lowestElement(grid, x, y) {
  let neighbors = [];
  let columns = grid[0].length;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < columns; col++) {
      let isSelf = row === x && col === y;
      let isNeighbor = Math.abs(row - x) <= 1 && Math.abs(col - y) <= 1;

      if (isNeighbor) {
        neighbors.push(grid[row][col]);
      }
    }
  }

  return Math.min(...neighbors);
}

console.log(lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1))
// ➞ 1

console.log(lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0))
//➞ -1

