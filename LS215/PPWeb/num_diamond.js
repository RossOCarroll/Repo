/*
Number Diamond
Write a function that prints a diamond similar to your original problem, but using numbers instead of stars. 
The middle row contains n (odd) numbers incrementing from 1 to n and back down.

Example for numberDiamond(5):

  1
 123
12345
 123
  1

Input:
  - A number
Output:
  - A diamond represented by numbers

Rules:
  - Return a 4 pointed diamond that is represented by consecutive numbers
  - Each white space starts as (n / 2) rounded down then decreaces by 1
  - Each number row increases by 2
  - Until you hit the center where its just numbers 1 to n
  - Then numbers decrease by 2 and spaces in by 1

Questions
  - Will ther always be a number input that is odd? greater the 1?
  - Will there alway be one argument?

Data structure:
  - Use a string to build each row in the diamond

Algorithm:
  - Helper: get nums
    - create a nums string
    - loop from 1 to the input number
      - appending i to the num string
    - return string

  - Create a spaces var that is (n / 2) rounded down
  - Create a half variable (n / 2) rounded down
  - Create a nums variable assigned to 1
  - Loop from 0 to half
    - log to the console ' ' repeated spaces number of times concat with getNums(num)
      - Decrement spaces by 1
      - Increment num by 2

  - log to the console getNums(n);

  - Loop from 0 to half
    - Decrement the nums by 2
    - Increment the spaces by 1
    - log to the console



*/
function getNums(num) {
  let numString  = '';

  for (let i = 1; i <= num; i++) {
    numString += String(i);
  }
  return numString;
}

function numberDiamond(n) {
  let spaces = Math.floor(n / 2);
  let half = Math.floor(n / 2);
  let num = 1;

  for (let i = 0; i < half; i ++) {
    console.log(' '.repeat(spaces) + getNums(num));
    spaces -= 1;
    num += 2
  }

  console.log(getNums(num))

  for (let i = 0; i < half; i ++) {
    spaces += 1;
    num -= 2
    console.log(' '.repeat(spaces) + getNums(num));
  }
}

numberDiamond(5)
numberDiamond(7)
numberDiamond(9)