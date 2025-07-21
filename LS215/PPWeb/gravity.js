/*
Given a 2D array of some suspended blocks (represented as hastags), return another 2D array which shows the 
end result once gravity is switched on.

switchGravityOn([
  ["-", "#", "#", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"]
]) ➞ [
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "#", "#", "-"]
]

[0, 1], [0, 2]
[3, 1], [3, 2]

switchGravityOn([
  ["-", "#", "#", "-"],
  ["-", "-", "#", "-"],
  ["-", "-", "-", "-"],
]) ➞ [
  ["-", "-", "-", "-"],
  ["-", "-", "#", "-"],
  ["-", "#", "#", "-"]
]

[0, 1], [0, 2]
        [1, 2]
        
        [1, 2]     
[2, 1]  [2, 2]


switchGravityOn([
  ["-", "#", "#", "#", "#", "-"],
  ["#", "-", "-", "#", "#", "-"],
  ["-", "#", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"]
]) ➞ [
  ["-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"],
  ["-", "#", "-", "#", "#", "-"],
  ["#", "#", "#", "#", "#", "-"]
]

Input: 
  - A 2 dimentional array with blocks representing hashtags

Output:
  - A 2 dimentional array where the gravity has turned on and the blocks fall to the bottom of the grid

Requirements:
  - Given a nester array of any size move all the block to the bottom
  - There are no ridgid blocks the grid
  
Questions
  - Empty arrays?
  - Columns with no blocks?
  - All the rows going to be the same size

Data structure:
  - A nested array to store the positions

Algorithm:
  - Identify the dimentions of the input grid: rows and columns
  - Iterate through column by column not row by row
    - For each column
      - count the number of '#' in each column
      - Fill that column from the bottom up
        - place the '#' counted number from the bottom up
        - Fill the rest with '-'
  - Construct a new grid based on the updated columns

*/

function getColumns(grid, colsLength) {
  let cols = [];

  for (let row = 0; row < grid.length; row++) {
    
  }
}

function switchGravityOn(grid) {
  let colsLength = grid[0].length;
  let rows = grid.length;

  let cols = getColumns(grid, colsLength);



}

switchGravityOn([
  ["-", "#", "#", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"]
]) 
// ➞ [
//   ["-", "-", "-", "-"],
//   ["-", "-", "-", "-"],
//   ["-", "-", "-", "-"],
//   ["-", "#", "#", "-"]
// ]

// switchGravityOn([
//   ["-", "#", "#", "-"],
//   ["-", "-", "#", "-"],
//   ["-", "-", "-", "-"],
// ]) ➞ [
//   ["-", "-", "-", "-"],
//   ["-", "-", "#", "-"],
//   ["-", "#", "#", "-"]
// ]

// switchGravityOn([
//   ["-", "#", "#", "#", "#", "-"],
//   ["#", "-", "-", "#", "#", "-"],
//   ["-", "#", "-", "-", "-", "-"],
//   ["-", "-", "-", "-", "-", "-"]
// ]) ➞ [
//   ["-", "-", "-", "-", "-", "-"],
//   ["-", "-", "-", "-", "-", "-"],
//   ["-", "#", "-", "#", "#", "-"],
//   ["#", "#", "#", "#", "#", "-"]
// ]