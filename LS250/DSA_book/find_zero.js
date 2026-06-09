// Write a function named `findZeroPosition` that takes in a
// sorted array of distinct integers as input.
// The function should return the index where the value 0 is
// found in the array, or the index where it would be inserted if
// it were not found.

// If the value 0 is found in the array, the function should
// return the index of the value 0. If the value 0 is not found,
// the function should return the index where it would be inserted
// while maintaining the sorted order of the array.

// Example:
// Input: nums = [-7, -5, -3, 0, 2]
// Output: 3

// Example:
// Input: nums = [3, 5, 7, 9, 11]
// Output: 0


/*
Input: an array of numbers
Output: the index of the value that equals 0

Explicit:
  - If the value 0 is not found then we return the index where the 0 could be inserted to still have an ordered array
  

Implicit:
  - Input array will be ordered lowest to highest
  - Will be an array of numbers


Algorithm:
  - Declare a left variavible and set it to 0
  - Declare a right variable and set it to the size of the array - 1
  - for loop to loop the length of the array
    - Get the mid point. left + right / 2
    - if the element at the mid point is qual to 0 
      - return mid point
    - if the element at mid is greater then left
      - reassign left to mid + 1
    - else
      - reassign right to mid - 1
  




*/

function findZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === 0) {
      return mid;
    } else if (arr[mid] < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}


console.log(findZero([-7, -5, -3, 0, 2]));
console.log(findZero([3, 5, 7, 9, 11]));
console.log(findZero([-8, -7, -5, -2, -1]));
