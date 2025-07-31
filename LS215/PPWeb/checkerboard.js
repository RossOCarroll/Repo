/*

Write a function that prints a checkerboard pattern of size n x n using X and O, alternating.

Example for checkerboard(4):

X O X O
O X O X
X O X O
O X O X
0 1 2 3

Input:
  - A number that represents a grid
Output:
  - A n x n checker board

Rules:
  - Given a number n return a n x n grid of a checker board wioth 'X' and 'O'
  - There should be white spaces in between each element in the checkerboard
  - each odd column starts with an 'O' , each even column starts with an 'X'
  - 

Questions:
  - What should the output loock like? a string representation of each row?
  - Will the input always be a even number? will it ever be a negative number?
  - Will there always be one argument?

Data structure:
  - Use a 2d array to store the peaces on the checker board
  - Leverage the join method to join the columns together

Algorithm:
  - Create a 2d array that is n x n
  - Create a loop from 0 - n Row
   - Create a row string
    - Create a loop from 0 - n col
      - Determine the value at each cell
        - If (row + col) % 2 === 0 append 'X' to rowString
        - Else append 'O'
      - After each character append a ' '
      - Log to the console rowString

     

*/

function checkerboard(n) {
  for (let row = 0; row < n; row++) {
    let rowString = '';
    for (let col = 0; col < n; col++) {
      if ((row + col) % 2 === 0) {
        rowString += 'X';
        rowString += ' ';
      } else {
        rowString += 'O';
        rowString += ' ';
      }
    }
    console.log(rowString);
  }
}

checkerboard(4)
// X O X O
// O X O X
// X O X O
// O X O X
checkerboard(7)
// X O X O X O X
// O X O X O X O
// X O X O X O X
// O X O X O X O
// X O X O X O X
// O X O X O X O
// X O X O X O X

checkerboard(1)
// X

