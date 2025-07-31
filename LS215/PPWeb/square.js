/*
Write a function that prints a hollow square of size n (positive integer) made of stars (*).

Example for hollowSquare(5):

*****
*   *
*   *
*   *
*****

Input:
  - a number repesenting a 5 X 5 box
Output:
  - Return a hollowed out box made up of * and white spaces

Rules:
  - input will always be a positive integer
  - fist and last rows will be n X *
  - The hollowed out part wil be (n - 2) rows
    - the rows will be white spaces - 2 stars on either side

Questions

Algorithm:
  - log to the console * repeaded n times
  - loop from 0 to n - 2
    - log to the console * n-2 spaces
  - log to the console * repeaded n times


*/

function hollowedBox(n) {
  console.log('*'.repeat(n));

  for (let i = 0; i < (n - 2); i++) {
    console.log('*' + ' '.repeat(n - 2) + '*');
  }

  console.log('*'.repeat(n));
}



hollowedBox(5);
hollowedBox(11);
hollowedBox(61);