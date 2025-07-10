/*
Write a function that computes the difference between the square of the sum of the first n positive integers 
and the sum of the squares of the first n positive integers.

Input:
  - An integer
Output:
  - An integer that is the difference between the sum squared and the squared sum 

Rules:

Questions:
  - Will there be a any other data type input?
  - Will a negative number be input?
  - Will there only be one argument or no arguments?

Algorithm:
  - Create an array starting from 1 to the input number (helper)
  - Find the sumSquared
    - Get the array from the helper
      - reduce the array add each element together
        - Get the square of that sum
  - Find the squareSum
    - Get the array from helper
      - square all elements in the array
        - sum all the elements in the array
  - return the sqsum - sum sqard
    
*/

function numberArray(num) {
  let array = [];
  let counter = 1;

  while (counter <= num) {
    array.push(counter);
    counter++;
  }

  return array;
}

function getSumSquare(num) {
  return numberArray(num).reduce((acc, value) => acc + value)**2;
}

function getSquareSum(num) {
  return numberArray(num).map(ele => ele**2).reduce((acc, value) => acc + value);
}


function sumSquareDifference(num) {
  let sumSquare = getSumSquare(num);
  let squareSum = getSquareSum(num);

  console.log(sumSquare - squareSum);
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150