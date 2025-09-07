/*
Given a 2D array of mines, replace the question mark with the number of mines that immediately surround it. This includes the diagonals, meaning it is possible for it to be surrounded by 8 mines maximum.

The key is as follows:

An empty space: "-"
A mine: "#"
Number showing number of mines surrounding it: "?"

Input:
  - a 2d array of - ? and #
Output:
  - A 2d array with the ? turned into intergers representing the number of mines that are next to it

Requirements:
  '-' denotes an empty space
  - "#" is a mine
  - ? should be replaced with the number of mines surrounding it
  - Mines can be vertical, horizontal or diagnoly next to the question mark
  - There could be muiltiple question marks
  - Find the question marks then find the mines and determine if there touching

  ["-", "#", "-"],    mines [0, 1] if the rows are the same and the cols are plus or minus one
  ["-", "?", "-"],    flags [1, 1]
  ["-", "-", "-"]

  ["-", "#", "-"],    
  ["-", "?", "-"],
  ["-", "-", "-"]
]) 
  ["-", "#", "-"],  mines [0, 1] [1, 0] [2, 0], [2, 1]
  ["#", "-", "?"],  flag [1, 2]
  ["#", "#", "-"]   touching [0, 1] [2, 1] if the cols are plus or minus one


Questions:
  - Will we always get the a 2d array


Data structure:
  - Strore the mines and flags in 2d array

Algorithm:
  - Get the mines positions
  - Get the fla positions
  - Iterate over the flag positions
    -Initialize a flag count
    - Iterate over the mine positions
      - If fx - mx less then or equal 1 && fy - my <= 1
        - incrment the count

  - replace the flags with grid[fx][fy] = count



*/

function searchGrid(grid, target) {
  let targets = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === target) targets.push([row, col]);
    }
  }

  return targets;
}

function minesweeper(grid) {
  let flags = searchGrid(grid, '?');
  let mines = searchGrid(grid, '#');

  for (let i = 0; i < flags.length; i++) {
    let flagRow = flags[i][0];
    let flagCol = flags[i][1];
    let count = 0

    for (let j = 0; j < mines.length; j++) {
      let mineRow = mines[j][0];
      let mineCol = mines[j][1];

      if (Math.abs(flagRow - mineRow) <= 1 && Math.abs(flagCol - mineCol) <= 1) {
        count++
      }
    }
    grid[flagRow][flagCol] = count;
  }

  return grid;
}


console.log(minesweeper([
  ["-", "#", "-"],    
  ["-", "?", "-"],
  ["-", "-", "-"]
])) 
// ➞ [
//   ["-", "#", "-"],
//   ["-", "1", "-"],
//   ["-", "-", "-"]
// ]

console.log(minesweeper([
  ["-", "#", "-"],
  ["#", "-", "?"],
  ["#", "#", "-"]
])) 
// ➞ [
//   ["-", "#", "-"],
//   ["#", "-", "2"],
//   ["#", "#", "-"]
// ]

console.log(minesweeper([
  ["-", "#", "#"],
  ["?", "#", ""],
  ["#", "?", "-"]
])) 
// ➞ [
//   ["-", "#", "#"],
//   ["3", "#", ""],
//   ["#", "2", "-"]
// ]

console.log(minesweeper([
  ["-", "-", "#"],
  ["?", "-", "-"],
  ["-", "-", "-"]
]))
// ➞ [
//   ["-", "-", "#"],
//   ["0", "-", "-"],
//   ["-", "-", "-"]
// ]