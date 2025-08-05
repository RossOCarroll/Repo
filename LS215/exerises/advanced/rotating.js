/*
As we saw in the previous exercises, a matrix can be represented by an array of arrays. For example, the 3x3 matrix shown below:

Copy Code
1  5  8
4  7  2
3  9  6
is represented by the following array of arrays:

Copy Code
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];
A 90-degree rotation of a matrix produces a new matrix in which each side of the matrix is rotated clockwise by 90 degrees. For example, the 90-degree rotation of the matrix shown above is:

Copy Code
3  4  1
9  7  5
6  2  8
A 90-degree rotation of a non-square matrix is similar. For example, given the following matrix:

Copy Code
3  4  1
9  7  5
its 90-degree rotation is:

Copy Code
9  3
7  4
5  1
Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, and returns the result as a new matrix. The function should not mutate the original matrix.


Input:
  - A 2d array of numbers
Output:
  - A 2d array where the numbers in the matrix are rotated 90 degrees

Requirements:
  - Given the 2d array we need to rotate all the numbers clock wise
  - In other words the last row becomes the first column the second row becomes second column
  - Start at the end of the array and word backwards filling in our columns

Algorithm:
  - Create and empty array matrix that is m x n
  - create a col at 0
  - Loop trough the input array from the last array to the first
    - iterate over the current array
      - append the current element at the col (index)
    - increment the col by 1
  return the matrix


*/

function rotate90(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let newMatrix = Array.from({ length: cols }, () => Array(rows));


  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      newMatrix[col][rows - 1 - row] = matrix[row][col];
    }
  }

  return newMatrix;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]