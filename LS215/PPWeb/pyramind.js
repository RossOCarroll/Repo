/*
Write a function that prints a pyramid of stars (*) of height n (where n is a positive integer).

Example for pyramid(5):

    *
   ***
  *****
 *******
*********

Input:
  - A number 

output:
  - Given the input number create a n X n pyramid using white space and asterisks

Rules:
  - Create the pryamid that is on and n X n grid
  - Starting from the top the point will always start with 1
    - The space jus on the left side starts with n - 1
    - each row the space - 1 and the starts + 1
    - until the bottom row is all asterisks
  

Questions:
  - Will there always be an odd number input?
  - Will the number be greater the 1?
  - Will there always be one argument?

Data structure:
  - Loop and concateate strings togther to create the diamond

Algorithm:
  - Create a spaces variable that is n - 1
  - Creat a stars variable === 1
  - Loop from 1 up to n 
    - Concat ' ' repeated by the space var and the '*' repeated be the stars var
    - Increment stars by 2
    - Decrement the spaces by 1
  

*/

function pyramid(n) {
  let spaces = n - 1;
  let stars = 1;

  for (let i = 0; i < n; i++) {
    console.log(' '.repeat(spaces) + '*'.repeat(stars));
    spaces--;
    stars += 2;
  }
}

console.log(pyramid(1));
console.log(pyramid(5));
console.log(pyramid(8));
console.log(pyramid(14));
pyramid(50);