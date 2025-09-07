/*
This challenge concerns square matrices (same number of rows and columns) as the below example illustrates:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
The entries in the diagonal line from the top left to the bottom right form the main diagonal of the matrix. 
In this case, 1,5,9 form the main diagonal.

Write a function that returns the matrix obtained by replacing the entries above the main diagonal with 0s.

For example, for the matrix above you should return:

[
  [1, 0, 0],
  [4, 5, 0],
  [7, 8, 9]
]
transformed ele [0, 1] [0, 2] [1, 2]
diagonal        [0, 0] - [1,1] - [2, 2]


if the column

Input:
  - A 2d array square
Output:
  -A 2d array but with 0's replacing the elements that are above the diagonal line

Requirements:
  - Given the diagonal from the top left of a square to the bottom right, transform the elements above the line
    to 0's
  - The matrixes will always be square but could differ in size
  - If the col is greater then the row we transform the element to 0

Questions:
  - Will the input array ever be empty?
  - Will the elements in the 2d array every be negative numbers?
  - Will we always recieve just one argument?

Data structure:
  - Create an array to append all new subArrays to

Algorithm:
  - Create an empty array
  - Iterate over the rows
    - Create a sub array
    - Iterate over the cols
      - If col > row 
        - append 0
      - else
        - append current element
    - Append sub array to result array
  - Return result

*/

function lowerTriang(square) {
  let result = [];

  for (let row = 0; row < square.length; row++) {
    let subArr = [];
    for (let col = 0; col < square[0].length; col++) {
      if (col > row) {
        subArr.push(0);
      } else {
        subArr.push(square[row][col])
      }
    }
    result.push(subArr);
  }

  return result;
}


console.log(lowerTriang([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))
// ➞ [
//   [1, 0, 0],
//   [4, 5, 0],
//   [7, 8, 9]
// ]

console.log(lowerTriang([
  [5, 7],
  [7, 9]
]))
// ➞ [
//   [5, 0],
//   [7, 9]
// ]

console.log(lowerTriang([
  [1, 8, 8, 1],
  [2, 7, 7, 2],
  [3, 6, 6, 3],
  [4, 5, 5, 4]
]))
// ➞ [
//   [1, 0, 0, 0],
//   [2, 7, 0, 0],
//   [3, 6, 6, 0],
//   [4, 5, 5, 4]
// ]