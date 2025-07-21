/*
Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as 
an argument to the function. You may assume that the argument will always be an odd integer.

Input:
  - A odd number

Output
  - A four pointed diamond on a n x n grid

Rules:
  - Assume that the input integer is odd
  - The diamond should be represented with stars '*' and whitespaces
  - Each row will have astericks
    - 5 rows will have 1, 3, 5, 3, 1 stars
    - 5 rows will have 2, 1, 0, 1, 2 white spaces

Questions:
  - Will the input every be a negative integer? What should i do?
  - Will the input be a data type other then an integer?
  - Will there be more then one argument? No arguments?
  - Will the input integer be larger number?

Data Structure:
  - 2 dimensional array for the map the grid
  - Strings as the elements in the grid
  - input is an integer

Algorithm:
  - Create the algorithm for astericks 1, 3, ..n n-2 ...
  - Create the algorithm for white spaces (n - astericks) / 2




*/

function createAsterisks(num) {
  let array = [];

  for (let i = 1; i <= num; i += 2) {
    array.push(i);
  }
  for (let j = (num - 2); j > 0; j -= 2) {
    array.push(j);
  }

  return array;
}

function createWhiteSpaces(asterisks, num) {
  let array = [];

  asterisks.forEach(asterisk => {
    array.push((num - asterisk) / 2);
  });

  return array;
}


function diamond(num) {
  let asterisks = createAsterisks(num);
  let whiteSpaces = createWhiteSpaces(asterisks, num);

  for (let i = 0; i <= num; i++) {
    let space = ' '.repeat(whiteSpaces[i]);
    let ast = '*'.repeat(asterisks[i]);
    console.log(space + ast + space);
  }
}



// diamond(1);
// logs
// *

// diamond(3);
// logs
//  *
// ***
//  *
// diamond(5)

// diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

diamond(15)