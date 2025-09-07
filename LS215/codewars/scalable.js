/*
Given an array of numbers, representing the height of a mountain in certain intervals, return whether this 
mountain is scalable.

A mountain can be considered scalable if each number is within 5 units of the next number in either direction.

Examples

isScalable([1, 2, 4, 6, 7, 8]) ➞ true

isScalable([40, 45, 50, 45, 47, 52]) ➞ true

isScalable([2, 9, 11, 10, 18, 21]) ➞ false
Notes

The array may start at any number and can be any length.

Input:
  - An array of integers
Output:
  - True of false depending on if the next number is scalable

Requirement:
  - A number is scalable if the the its plus or minus 5 with the next number
  - The array can start at any number
  - The array can be any length

Algorithm
  - Iterate over the array
    - if the current num  < next num - 5 or current num > next num + 5
     - return false

  




*/

function isScalable(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let currentNum = arr[i];
    let nextNum = arr[i + 1];

    if (Math.abs(currentNum - nextNum) > 5) {
      return false;
    }
  }
  return true;
}

console.log(isScalable([1, 2, 4, 6, 7, 8])) //➞ true

console.log(isScalable([40, 45, 50, 45, 47, 52])) //➞ true

console.log(isScalable([2, 9, 11, 10, 18, 21])) //➞ false