// You are given a grid represented as a nested array filled
// with empty strings. Chaos, the puppy, is standing at the
// top-left corner of the grid and can move either down or right
// at any point in time. Determine the number of distinct paths
// Chaos can take to reach a bowl of treats placed at the
// bottom-right corner of the grid.

// Define a function `chaosInTheGrid` that, given a nested
// array, returns the number of unique paths that Chaos
// can take to reach the bottom-right corner.

// The grid will have at least 1 row and 1 column.

// Example:

// Given the following 2x3 grid:

const grid = [
  ["", "", ""],
  ["", "", ""],
];

// There are three distinct path Chaos can take:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right

/*
Input:
  - a nested 2d array with empty strings
Output:
  - an interger representing the amount paths it would tke to go from the top left square to the bottom right square

Problem:
  - Path can only be moved by traveling down or left not diagonal
  - We can populate the grid by filling in the first row and column with 1 then every other square is 
  the sum of the one abouve row - 1 and the square to the left col - 1
  - top down approach

Data structure:
  - nested array
  - recursive function to iterate through the grid

Algorithm:
  - Get the length of the grid as rows
  - Get the length of grid at index 0 as columns
  - fill in the first row with '1's
  - fill in the first col with '1's



*/

function chaosInTheGrid(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  function paths(row, col) {
    if (row === 0) return 1;
    if (col === 0) return 1;

    return paths(row - 1, col) + paths(row, col - 1); // ✅ row and col
  }

  return paths(rows - 1, cols - 1); // ✅ start at last valid index
}

function chaosInTheGrid(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const memo = new Map();

  function paths(row, col) {
    if (row === 0) return 1;
    if (col === 0) return 1;

    const key = `${row}, ${col}`
    if (memo.has(key)) {
      return memo.get(key);
    }

    let result = paths(row - 1, col) + paths(row, col - 1);
    memo.set(key, result);
    return result
  }

  return paths(rows - 1, cols - 1);
}

// Test cases

const grid1 = [[""]];
const grid2 = [
  ["", ""],
  ["", ""],
];
const grid3 = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
const grid5 = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];
console.log(chaosInTheGrid(grid1) === 1);
console.log(chaosInTheGrid(grid2) === 2);
console.log(chaosInTheGrid(grid3) === 6);
console.log(chaosInTheGrid(grid4) === 15);
console.log(chaosInTheGrid(grid5) === 252);
// All test cases should log true