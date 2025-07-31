/*
You're given an n x n matrix of light bulbs. Each bulb is initially off. You make n passes over the matrix. On 
the i-th pass, toggle all bulbs in rows and columns that are divisible by i. Return the final matrix of true 
(on) and false (off).

Input:
  - a n x n matrix of light bulbs or booleans
Output:
  - A final matrix of bulbs that when passed over the the index is divisable by i

Rules:
  - You ar given the matrix of a 2d array of booleans
  - For each cell position toggle the switch if row + column % 2 === 0
    - if true return false , if false return true
  - Return the matrix

Data structure:
  - 2d array

Algorithm:
  - Find the n
    - the input array length * length of the array at index 0
  - Iterate over the rows.. elements in ther array
    - Iterate over the columns 
      - if row + col === % 2
        - change current element to the inverse
  - return matrix



*/

function sumMatrix(grid, n) {
  if (!grid.length || !grid[0].length) return [];

  const result = [];

  for (let row = 0; row < grid.length; row++) {
    const newRow = [];
    for (let col = 0; col < grid[0].length; col++) {
      newRow.push((row + col) % n === 0);
    }
    result.push(newRow);
  }

  return result;
}


console.log(sumMatrix(
  [
    [true, false, true],
    [false, true, false],
    [true, true, false]
  ]  
))


console.log(sumMatrix(
  [
    [true, false, true, true],
    [false, true, false, false],
    [true, true, false, true]
  ]  
))

console.log(sumMatrix(
  []
))
