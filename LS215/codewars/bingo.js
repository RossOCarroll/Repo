/*
Create a function that takes a 5x5 2D array and returns true if it has at least one Bingo, and false if it doesn't.

Examples

bingoCheck([
  [45, "x", 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, 39, 44],
  [21, "x", 24, 30, 52]
]) ➞ true

bingoCheck([
  ["x", 43, 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, 65, "x", 83, 54],
  [67, 98, 39, "x", 44],
  [21, 59, 24, 30, "x"]
]) ➞ true

bingoCheck([
  ["x", "x", "x", "x", "x"],
  [64, 12, 47, 32, 90],
  [37, 16, 68, 83, 54],
  [67, 19, 98, 39, 44],
  [21, 75, 24, 30, 52]
]) ➞ true

bingoCheck([
  [45, "x", 31, 74, 87],
  [64, 78, 47, "x", 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, "x", 44],
  [21, "x", 24, 30, 52]
]) ➞ false

Input:
  - a 5 X 5 2d array of numers and 'x' that represents a bingo mark
Output:
  - true of false depending if the board has a bingo

Requirements:
  - A bingo is when there is there is a row of 5, a column of 5, or a diaginol of 5 'x'
  - If we were to get all the positions of a row
   col : [0, 1] [1, 1] [2, 1] [3, 1] [4, 1] all have the same column of 1
   row : [0, 0] [0, 1] [0, 2] [0, 3] [0, 4] all the rows are the same (0)
   dia : [0, 0] [1, 1] [2, 2] [3, 3] [4, 4] all the elements have the same index[0] = index[1]
   dia : [4, 0] [3, 1] [2, 2] [1, 3] [0, 4] the elements are the revers
  - Always recieve a 5 x 5 array

Algorithm:
  - Iterate over the 2d array to make an array of markers with the [row, col] 
  - Check if the all the markers have the same column
  - Check if all the markers have the same row
  - Check if all the markers have the diagnol
    - iterate over the diagonals 
      - If elements is not in markers return false
        - return true
  

*/

function getMarkers(board) {
  let markers = [];

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 'x') {
        markers.push([row, col]);
      }
    }
  }
  return markers;
}

function bingoCol(markers) {
  let mark = markers[0][1];

  return markers.every(marker => marker[1] === mark);
}

function bingoRow(markers) {
  let mark = markers[0][0];

  return markers.every(marker => marker[0] === mark);
}

function bingoDia(markers, diagonal) {
  return diagonal.every(dia =>
    markers.some(marker => marker[0] === dia[0] && marker[1] === dia[1])
  );
}

function bingoCheck(board) {
  const DIAGONALS = [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4]];
  const DIAGONALS_REV = [[4, 0], [3, 1], [2, 2], [1, 3], [0, 4]];

  let markers = getMarkers(board);

  if (bingoCol(markers)) return true;
  if (bingoRow(markers)) return true;
  if (bingoDia(markers, DIAGONALS)) return true;
  if (bingoDia(markers, DIAGONALS_REV)) return true;

  return false;
}

console.log(bingoCheck([
  [45, "x", 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, 39, 44],
  [21, "x", 24, 30, 52]
])) //➞ true

console.log(bingoCheck([
  ["x", 43, 31, 74, 87],
  [64, "x", 47, 32, 90],
  [37, 65, "x", 83, 54],
  [67, 98, 39, "x", 44],
  [21, 59, 24, 30, "x"]
])) //➞ true

console.log(bingoCheck([
  ["x", "x", "x", "x", "x"],
  [64, 12, 47, 32, 90],
  [37, 16, 68, 83, 54],
  [67, 19, 98, 39, 44],
  [21, 75, 24, 30, 52]
])) //➞ true

console.log(bingoCheck([
  [45, "x", 31, 74, 87],
  [64, 78, 47, "x", 90],
  [37, "x", 68, 83, 54],
  [67, "x", 98, "x", 44],
  [21, "x", 24, 30, 52]
])) //➞ false