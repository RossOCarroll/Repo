/*

Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an 
argument to the function. You may assume that the argument will always be an odd integer.

Input:
  - is an integer
Output:
  - A n x n diamond made up of '*'

Requirements:
  - Input integer will always be a odd number
  - The diamond will consist of '*' and white spaces
  - Diamond always starts one '*' and the whitespace from the left are n / 2 + 1 abs
  - Whitespaces decrement by one and the astrecks increase by 2
  - until we get to the half way point where its n * astricks
  - We the decrement the astricks by 2 and increments the spaces by 1

Questions:
  - Will we receive a number less the 1?
  - Will we get an argument other then an integer?

Data Structure:
  - use numbers to track the halfway point, number of spaces and astricks

Algorithm:
  - Get the half way point and the number of white spaces (n / 2) - 1 abs
  - create a space var set 
  - create a star var set to one
  - Loop from 0 to half way point
    - Log to the console ' ' repeated space times + * repeated star times
    - decrement spaces by one
    - increment stars by 2
  - Log to the console stars * n
  - Loop 0 to half way again
    -- Log to the console ' ' repeated space times + * repeated star times
    - increment spaces by 1
    - decrements stars by 2

*/
function diamond(n) {
  let halfway = Math.floor(n / 2);
  let spaces = Math.floor(n / 2);
  let stars = 1;

  for (let i = 0; i < halfway; i++) {
    console.log(' '.repeat(spaces) + '*'.repeat(stars));
    stars += 2;
    spaces--;
  }

  console.log('*'.repeat(n))

 for (let i = 0; i < halfway; i++) {
  stars -= 2;
  spaces++;
  console.log(' '.repeat(spaces) + '*'.repeat(stars));

 }
}

diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
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