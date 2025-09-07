/*
Write a function that replaces every row and column that contains at least one 1 into a row/column that is 
filled entirely with 1s.

Examples

onesInfection([
  [0, 0, 1],
  [0, 0, 0],
  [0, 0, 0]
]) ➞ [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1]
]

onesInfection([
  [1, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]
]) ➞ [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 0]
]

onesInfection([
  [0, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 0, 0]
]) ➞ [
  [1, 1, 1, 1],
  [0, 1, 0, 1],
  [1, 1, 1, 

Input:
  - a 2d array of 1s and 0z
Output:
  - A 2d array with there rows thst have at least one 1 in the row or col are replaced with all 1s

Requirements:
  - If a row/col has at least one 1 replace that row or col with 1s
  - Must mutate the orginal array

    [0, 0, 1],  [0 , 2 ]
  [0, 0, 0],
  [0, 0, 0]
]) ➞ [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1]
]

onesInfection([
  [1, 0, 1, 0], [0, 0] [0, 2]
  [0, 1, 0, 0], [1, 1]
  [0, 0, 0, 0]
]) ➞ [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 0]
]


questions?
  - Will we always recieve a 2d array
  - Will the arrays be sparse?
  - Will the matrixes be even 2 X 2 5 X 5

Data Structure:
  - Gather all the 1s in a row/col 2d array

Algorithm:
  - Gather all the row col pairs of the 1s
  - Iterate over the 1 positions
    - Iterate over the rows
      - Ierate over the cols
        - If eith row or col match the current position
          - replace the current ele with 1
  - Return matrix




*/

function findOnes(matrix) {
  let positions = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1) {
        positions.push([row, col]);
      }
    }
  }

  return positions;
}

function onesInfection(matrix) {
  let onesPositions = findOnes(matrix);

  onesPositions.forEach(positions => {
    let targetRow = positions[0];
    let targetCol = positions[1];

    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
        if (row === targetRow) {
          matrix[row][col] = 1;
        } else if (col === targetCol) {
          matrix[row][col] = 1;
        }
      }
    }
  })

  return matrix;
}



console.log(onesInfection([
  [0, 0, 1],
  [0, 0, 0],
  [0, 0, 0]
]))
//  ➞ [
//   [1, 1, 1],
//   [0, 0, 1],
//   [0, 0, 1]
// ]

console.log(onesInfection([
  [1, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]
]))
//  ➞ [
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 0]
// ]

console.log(onesInfection([
  [0, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 0, 0]
]))
//  ➞ [
//   [1, 1, 1, 1],
//   [0, 1, 0, 1],
//   [1, 1, 1, 1]
// ]