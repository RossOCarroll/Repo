/*
Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied 
as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

Input:
  - A number that represents a n x n grid

Output:
  - A n x n grid that shows an eight pointed star

Requirements:
  - Given the number we create a n x n string.. an array of arrays? and array of strings?
  - Every row will have 3 stars and white spaces except for the middle row
  - Find the white spaces are in between the stars : 7 / 2 = 3 - 1 = 2 starts at 2 spaces in between starts
    and decrement by 1
  - Out side spaces start at 0 and increment by 1
  - until we get to the center
  - Going to find the halfway point
  - Print the center
  - Do the reverse where spaces in the outside decrement and spaces in between increase
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

7 / 2 = 3 - 1
9 / 2 = 4 - 1

Questions:
  - Will be always get a number > 0 as an argument?
  - Will the number always be odd?

Data Structure:
  - Build a string with in the loop and log to the console
  - Using the input number find the half way point

Algorithm:
  - Create boarder at 0
  - Create a spaces ar n / 2 - 1
  - Create a half way point = n / 2 rounded down
  - Loop from 0 to halfway 
    - For each iteration compile the string
      - boarder + star + space + star + space + star
      - Increment the boarder by 1
      - Decrement the spaces by 1
  - Log to the console the stars * n
  - From 0 to halfway point
    - compile string boarder + star + space + star + space + star
    - decrement the boarder
    - Increment the spaces 


*/

function star(n) {
  let boarder = 0;
  let space = Math.floor((n / 2) - 1);
  let halfway = Math.floor(n / 2);

  for (let i = 0; i < halfway; i++) {
    console.log(' '.repeat(boarder) + '*' + ' '.repeat(space) + '*' + ' '.repeat(space) + '*');
    boarder++;
    space--;
  }

  console.log('*'.repeat(n));

  for (let i = 0; i < halfway; i++) {
    boarder--;
    space++;
    console.log(' '.repeat(boarder) + '*' + ' '.repeat(space) + '*' + ' '.repeat(space) + '*');
  }
}

console.log(star(7));
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

console.log(star(9));
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

star(21);