/*
In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. In a 
language that is not optimized for recursion, some (but not all) recursive functions can be extremely slow 
and may require massive quantities of memory and/or stack space. If you tested for bigger nth numbers, you 
might have noticed that getting the 50th fibonacci number already takes a significant amount of time.

Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

Rewrite your recursive fibonacci function so that it computes its results without using recursion.

Note that JavaScript can accurately compute integers up to 16 digits long; this means that fibonacci(78) is 
the largest Fibonacci number that you can accurately compute with simple operations in JavaScript.

Input: 
  - The nth number
Output:
  - the fibbonacci number

Rules


Algorithm:
  - Create a fibSequence starting with [1,1]
  - Loop for nth times
    - create a fib number and assign it to the sum of index at 0 in the fib sequence and 1 index
    - add the fib number to the sequence 
    - remove the first number
  - return the fib number

*/


function fibonacci(nth) {
  let fibSequence = [1, 1];
  let fibNum 

  for (let i = 0; i < nth; i++) {
    fibNum = fibSequence[0] + fibSequence[1];
    fibSequence.push(fibNum);
    fibSequence.shift();
  }

  return fibNum;
}



console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050