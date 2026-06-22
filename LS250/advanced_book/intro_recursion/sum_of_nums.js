// Create a function that calculates the sum of the first `n`
// natural numbers. A natural number is a positive integer
// starting from 1. Therefore, the sum of the first `n` natural
// numbers is the sum of all integers from 1 to `n`.

// For example, if `n` is 5, the sum would be 1 + 2 + 3 + 4 + 5 == 15.

/*
input:
  - A number
Output:
  - a number that is the sum of all the natural numbers starting at 1 up to 'n'

Problem:
  - 

Data structure:
  - recursive function

Algorithm:
  - Base case: when the number n is less then or equal to 1
  - Recursive Definition: the sum of the first n natural numbers can be expressed as n plus 
  the sum of the first n - 1;




*/


function sumOfNaturalNumbers(num) {
  if (n <= 1) return 1;
  return n + sumOfNaturalNumbers(n - 1);
}

console.log(sumOfNaturalNumbers(1) === 1);
console.log(sumOfNaturalNumbers(5) === 15);
console.log(sumOfNaturalNumbers(10) === 55);
console.log(sumOfNaturalNumbers(20) === 210);
console.log(sumOfNaturalNumbers(0) === 0);

// All test cases should log true.