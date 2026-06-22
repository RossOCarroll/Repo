// You are given a grid represented as a
// nested array filled with strings.

// Chaos is standing at the top-left corner of
// the grid and can move either down or right at
// any point in time. However, there are sleeping
// cats in certain squares, represented by the
// letter "C" in the grid, and Chaos cannot go through
// these squares.

// Determine the number of distinct paths Chaos
// can take to reach a bowl of treats placed at
// the bottom-right corner of the grid.

// Define a function `chaosInTheGridWithCats` that,
// given a nested array, returns the number of
// unique paths that Chaos can take to reach the
//  bottom-right corner.

// The grid will have at least 1 row and 1 column.

// Example:

// Given the following 2x3 grid:

const grid = [
  ["", "C", ""],
  ["", "", ""],
];

// There is only one distinct path Chaos can take:
// 1. Down -> Right -> Right

/*
Recusive definition:
  - the number of unique paths to a square is the sum of square to the top and to the left.
  - Memoization: we can use Map with string representing the square coordinates as the key
  - Base Case: if the square is holding a cat or is out of bounds from the grid return 0, otherwise if the square is 
  (0, 0) return 1

*/

// function chaosInTheGridWithCats(grid) {
//   const rows = grid.length;
//   const cols = grid[0].length;
//   const memo = new Map();

//   function paths(row, col) {
//     if (row < 0 || col < 0) return 0;
//     if (grid[row][col] === 'C') return 0;
//     if (row === 0 && col === 0) return 1;

//     let key = `${row}, ${col}`;
//     if (memo.has(key)) {
//       return memo.get(key);
//     }

//     let result = paths(row - 1, col) + paths(row, col - 1);
//     memo.set(key, result);
//     return result;
//   }

//   return paths(rows - 1, cols - 1);
// }

function chaosInTheGridWithCats(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let dp = [];

  for (let row = 0; row < rows; row++) {
    let column = [];
    for (let col = 0; col < cols; col++) {
      column.push(0)
    }
    dp.push(column);
  }
  
  dp[0][0] = 1;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row === 0 && col === 0) continue;

      if (grid[row][col] === 'C') {
        dp[row][col] = 0;
      } else {
        let fromAbove = row > 0 ? dp[row - 1][col] : 0;
        let fromBelow = col > 0 ? dp[row][col - 1] : 0;
        dp[row][col] = fromAbove + fromBelow;
      }
    }
  }

  return dp[rows - 1][cols - 1]

}

// Test Cases:

const grid1 = [
  ["", "C"],
  ["", ""],
];
const grid2 = [["", "C"]];
const grid3 = [
  ["", "", ""],
  ["", "C", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", "C"],
  ["", "C", "", "", ""],
  ["", "", "", "C", ""],
];
const grid5 = [
  ["", "", "", "", "C", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "C", "", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
];


console.log(chaosInTheGridWithCats(grid1) === 1);
console.log(chaosInTheGridWithCats(grid2) === 0);
console.log(chaosInTheGridWithCats(grid3) === 2);
console.log(chaosInTheGridWithCats(grid4) === 2);
console.log(chaosInTheGridWithCats(grid5) === 43);