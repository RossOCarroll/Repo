// You are provided with a 2D grid map where each cell is either
//  marked as a tree ('T') or open land ('O'). Your goal is to
// count the number of distinct forest regions on the map. A forest
// region consists of a contiguous group of tree cells ('T'). For
// this problem, two tree cells are considered connected if they
// share an edge horizontally or vertically, but not diagonally.

// Write a function numOfForests that accepts a nested array grid
// representing the 2D map. The function should return the total
// number of forest regions in the grid.

/*
Input:
  - A 2d array of 'T' and 'O'
Output:
  - the number of distinct forests that are found

Problem:
  - A forest is when at least 2 'T' are touching each other either vertically or horizontally
*/

// function dfs(row, col, grid, visited) {
//   if (row < 0 || row >= grid.length) return;
//   if (col < 0 || col >= grid[0].length) return;
//   if (visited.has(`(${row}, ${col})`)) return;
//   if (grid[row][col] !== 'T') return;

//   visited.add(`(${row}, ${col})`);
//   dfs(row - 1, col, grid, visited);
//   dfs(row + 1, col, grid, visited);
//   dfs(row, col - 1, grid, visited);
//   dfs(row, col + 1, grid, visited);
// }

// function numOfForests(grid) {
//   let visited = new Set();
//   let forestCount = 0;

//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid[0].length; col++) {
//       if (visited.has(`(${row}, ${col})`)) {
//         continue;
//       }

//       if (grid[row][col] === 'T') {
//         dfs(row, col, grid, visited);
//         forestCount++;
//       }
//     }
//   }

//   return forestCount;
// }

function dfs(row, col, grid) {
  if (row < 0 || row >= grid.length) return;
  if (col < 0 || col >= grid[0].length) return;
  if (grid[row][col] !== 'T') return;

  grid[row][col] = 'X';

  dfs(row - 1, col, grid);
  dfs(row + 1, col, grid);
  dfs(row, col - 1, grid);
  dfs(row, col + 1, grid);
}

function numOfForests(grid) {
  let forestCount = 0;

  for (let row = 0; row < grid.length; row++) {
  for (let col = 0; col < grid[0].length; col++) {

    if (grid[row][col] === 'T') {
      dfs(row, col, grid);
      forestCount++;
    }
    }
  }
  return forestCount;
}

const grid1 = [];
console.log(numOfForests(grid1) === 0);

const grid2 = [
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
  ['O', 'O', 'O']
];
console.log(numOfForests(grid2) === 0);
const grid3 = [
  ['T', 'T', 'O'],
  ['T', 'T', 'O'],
  ['O', 'O', 'O']
];
console.log(numOfForests(grid3) === 1);
const grid4 = [
  ['O', 'O', 'T', 'T', 'O'],
  ['T', 'T', 'O', 'T', 'O'],
  ['T', 'T', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'T', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
];
console.log(numOfForests(grid4) === 3);

const grid5 = [
  ['T', 'T', 'T'],
  ['T', 'O', 'T'],
  ['T', 'T', 'T']
];
console.log(numOfForests(grid5) === 1);

const grid6 = [
  ['T', 'O', 'T', 'O', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
  ['T', 'O', 'T', 'O', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
  ['T', 'O', 'T', 'O', 'T']
];
console.log(numOfForests(grid6) === 9);

const grid7 = [
  ['T', 'T', 'T'],
  ['T', 'T', 'T'],
  ['T', 'T', 'T']
];
console.log(numOfForests(grid7) === 1);

// All test cases should log true