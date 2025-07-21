/*
Write a function that diagonally orders numbers in a n x n matrix, depending on which of the four corners you 
originate from: upper-left (ul), upper-right (ur), lower-left (ll), lower-right (lr).

Input:
  - A number and string that represents which the grid orginates from
Output:
  - A 2d grid that has increments numbers starting from 0 

Requirements:
  - Order the numbers diagonally from ul ur ll or lr


Questions:
  - Will there always be a number as an input?
  - will that number be negative?
  - Will there always be a 2nd argument?

Algorithm:
  - Create a empty array to append sub arrays to
  - Loop through the from the row strarting at 0 < then n
    - loop through the row count
*/
function getForm(i, j, n, corner) {
  if (corner === 'ul') {
    return i + j;
  } else if (corner === 'ur') {
    return i + (n - 1 - j);
  } else if (corner === 'll') {
    return j + (n - 1 - i);
  } else if (corner === "lr") {
    return (2 * (n - 1)) - i - j;
  }
}

function diagonalize(n, corner) {
  let grid = [];

  for (let i = 0; i < n; i++) {
    grid[i] = new Array(n);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      grid[i][j] = getForm(i, j, n, corner);
    }
  }

  return grid;
}

console.log(diagonalize(3, "ul"))
// ➞ [
//   [0, 1, 2],
//   [1, 2, 3],
//   [2, 3, 4]
// ]

console.log(diagonalize(4, "ur"))
//  ➞ [
//   [3, 2, 1, 0],
//   [4, 3, 2, 1],
//   [5, 4, 3, 2],
//   [6, 5, 4, 3]
// ]

console.log(diagonalize(3, "ll"))
//  ➞ [
//   [2, 3, 4],
//   [1, 2, 3],
//   [0, 1, 2]
// ]

console.log(diagonalize(5, "lr"))
// ➞ [
//   [8, 7, 6, 5, 4],
//   [7, 6, 5, 4, 3],
//   [6, 5, 4, 3, 2],
//   [5, 4, 3, 2, 1],
//   [4, 3, 2, 1, 0]
// ]