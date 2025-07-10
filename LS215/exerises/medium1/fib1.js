/*
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers 
are 1 by definition, and each subsequent number is the sum of the two previous numbers. Fibonacci numbers 
often appear in mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. 
For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering 
that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of 
digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

Input:
  - A number
Output:
  - A number that represents the amount of numbers in the sequence it takes to get the input number of digits

Rules:
  - Use bigInts append 'n' to the numbers in the solution
  - Return the index as a bigInt
  - The argument will always be a number equal or greater then 2

Questions:
  - Will there always be one argument, more then one?
  - Will there every be an input other then a number?
  - Could the input be any size?

Data structure:
  - Use an array to store the sequence
  - Return a BigInt

Algorithm:
  - Create an array to store the sequence
    - Start with [1, 1]
  - Start a loop
    - break out if the current number is the amount of digits as the argument
      - Convert the current number to a string and get the length
    - Get the currentNum 
      - add the number at index - 2 and the number at index - 1
    - append the current number to the fib sequence
  - return the length of the fibSequence
*/

function findFibonacciIndexByLength(digits) {
  let fibSequence = [1n, 1n];
  let currentNum = 0

  while (currentNum.toString().length < Number(digits)) {
    currentNum = fibSequence[fibSequence.length - 2] + fibSequence[fibSequence.length - 1];
    fibSequence.push(currentNum);
  }

  return BigInt(fibSequence.length);
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.