/*
Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied 
as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

Input:
  - An odd integer that represents the size of a grid where an 8 pointed star can fit.

Output:
  - An 8 pointed star with '*' representing the parts of the star and whites spaces.
    - Each row is the length of n and there is n rolls
    - Each row has 3 asterisks 
    - The middle row is all asterisks
    - the rows have varing amounts of spaces between the asterisks
    

Requirements:
  - Determine a patter to where the astricks and white spaces go
  - We can figure out a pattern by walking each row
    - *__*__*
    - _*_*_*_
    - __***__
    - *******
    - __***__
    - _*_*_*_
    - *__*__*
  - The value of the number of spaces between each asterisks is (n - 3) / 2 for the first row 
    then decrements n - 1 for each row. until the row right before the middle where the padding is 0
    and then increments by 1

Data structure
  - we can use an array to build each row and join the elements together before logging them  to the console

Algorithm:
  - Compute the value of the index of the middle row
    - middleIdx = n / 2
  - Iterate starting from 0 up until and not including the middle 
    - Initialize an array of 3 asterisks
    - Join the asterisks together with ((n - 3)/ 2) - current iteration number
    - Pad the left side with the current iteration number
    - Log the row
  - log the row of n number of asterisks
  - Iterate starting from the middleIdx + 1 up to the last row (n - 1) for each row
    - Initialize an array of the three asterisks
    - Join the asterisks with the current iteration number of spaces
    - Pad the left side with ((n - 3)/ 2) - current iteration number
    - log the row


*/

function star(n) {
  let middleIdx = Math.ceil(n / 2);

  for (i = 0; i < (middleIdx - 1); i++) {
    let asterisks = ['*', '*', '*'];
    let leftPadding = ' '.repeat(i);

    let row = asterisks.join(' '.repeat(((n - 3) / 2) - i));
    console.log(leftPadding + row);
  }
  console.log('*'.repeat(n));
  for (let i = middleIdx - 2; i >= 0; i--) {
    let asterisks = ['*', '*', '*'];
    let leftPadding = ' '.repeat(i);

    let row = asterisks.join(' '.repeat(((n - 3) / 2) - i));
    console.log(leftPadding + row);
  }
}


star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// // logs
// // *   *   *
// //  *  *  *
// //   * * *
// //    ***
// // *********
// //    ***
// //   * * *
// //  *  *  *
// // *   *   *