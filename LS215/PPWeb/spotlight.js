/*
Given a grid of numbers, return a grid of the Spotlight Sum of each number. The spotlight sum can be defined 
as the total of all numbers immediately surrounding the number on the grid, including the number in the total.

Input:
  - - A 2d array of numbers
Output:
  - The Spotlight sum of every number in the grid

Rules:
  - The input is an n x n grid in an 2d array
  - The spotlight sum is defined as the total of all the numbers immedately surrounding the number
    - One index to the left - 1 + 1
    - One index to the right 
    - On index diagonally 1[+1, + 1] or  [-1, -1];
  - If the input only contains a 2d array with one element return that element

questions:
  - Will there always be one argument?
  - Will there always be a 2d array input?
  - Will the sub arrays always have numbers?
  - Will there be more then one argument?
  - Will there be sparse arrays?

Data structure:
  - We receive a to 2d array so iterating over that array maybe using map?

Algorithm:
  - Iterate over the input array rows
    - Iterate over all the columns
      - Declare a variable to hold all the surrounding numbers
      - Get the row and the column of the target number
      - Get all the surrounding numbers
        - If row = targetrow + 1 or row = targetrow - 1
        - If col = targetcol + 1 or col = targetroe - 1
        - else if col = targetcol + 1 and row = targetrow - 1
        - else if col = targetcol - 1 and row = targetrow + 1
        - else if col = targetcol - 1 and row = targetrow - 1
        - else if col = targetcol + 1 and row = targetrow + 1

      - get the sum of surreound numbers and return
  
*/

// for (let i = 0; i < n; i++) {
//   grid[i] = new Array(n);
// }

function getIndexes(rows, cols) {
  let indexes = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      indexes.push([row, col]);
    }
  }
  return indexes;
}

function isNeighbor(row, col, targetRow, targetCol) {
  return (
    !(row === targetRow && col === targetCol) &&
    Math.abs(row - targetRow) <= 1 &&
    Math.abs(col - targetCol) <= 1
  );
}


function spotlightMap(numbers) {
  if (!Array.isArray(numbers) || !Array.isArray(numbers[0])) {
    return [];
  }
  let rows = numbers.length;
  let cols = numbers[0].length;
  let indexes = getIndexes(rows, cols);
  let result = [];

  for (let i = 0; i < rows; i++) {
    let rowResult = [];

    for (let j = 0; j < cols; j++) {
      let centerVal = numbers[i][j];

      let neighbors = indexes.filter(([r, c]) => {
        return isNeighbor(r, c, i, j);
      });

      let sum = centerVal;

      neighbors.forEach(([r, c]) => {
        sum += numbers[r][c];
      });

      rowResult.push(sum);
    }
    result.push(rowResult);
  }

  return result;
}

console.log(spotlightMap([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])) 
// ➞ [
//   [12, 21, 16],
//   [27, 45, 33],
//   [24, 39, 28]
// ]


console.log(spotlightMap([
  [2, 6, 1, 3, 7],
  [8, 5, 9, 4, 0]
]))
// ➞ [
//   [21, 31, 28, 24, 14],
//   [21, 31, 28, 24, 14]
// ]


// spotlightMap([[3]]) ➞ [[3]]