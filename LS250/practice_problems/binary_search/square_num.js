/*
Write a function that checks whether a given positive integer num is the result of an integer multiplied 
by itself, which is typically referred to as a square integer. The function should return true if num is 
a square integer, otherwise false. The implementation should not rely on any square root computation 
provided by built-in Math library.

Input:
  - A single integer
Output:
  - true or false depending on wether num is a square root

Explicit:
  - A square root of a number is if i * i === num, 

  Data Structure:
    - Integers
    - Binary search 

Algorithm:
  - declare a left variable set to 1
  - declare a right variable set to num / 2 + 1
  - loop while left < right
    - get mid left + right / 2
    - if mid * mid === num
      - return true
    - elsif mid * mid < num
      - left set to mid + 1
    - else mid * mid > num
      - right set to mid - 1
  - return false
*/


function isSquareInteger(num) {
  if (num === 1 ) return true;
  let left = 1;
  let right = num / 2;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (mid * mid === num) {
      return true;
    } else if (mid * mid < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}


console.log(isSquareInteger(1) === true);
console.log(isSquareInteger(4) === true);
console.log(isSquareInteger(16) === true);
console.log(isSquareInteger(14) === false);
console.log(isSquareInteger(25) === true);
console.log(isSquareInteger(26) === false);

// All test cases should log true.