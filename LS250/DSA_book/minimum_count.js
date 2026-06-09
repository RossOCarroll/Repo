// Given an array `nums` sorted in ascending order, determine
// the minimum between the count of positive integers and the
// count of negative integers.

// Please note that the number `0` is neither positive nor negative.

/*

Input:
  - An array of numbers
Output:
  - A number that represents either the positive amount of numbers or negative amount of numbers whichever is lowest

Explicit:
  - 0 is neither positive or negative

Implicit:
  - if there are no positive or negative number return 0

Problem:
  - The solution could be dividing the array into left side (negative) / right side (positive)


Algorithm:
  - declare a left variable set to 0
  - declare a right variable set to length of array
  - declare a posi/neg arrays
  - Loop while left is less then or equal to right
    - Get the mid point L + R / 2
    - if the mid point is 0 
      - split the array into 2 halves 0 to midpoint and mid point to end 
    - If the midpoint ele is less then 0
      - left = mid + 1
    - else 
      - right = mid - 1

*/

function minimumCount(nums) {
  const firstPositiveIdx = firstPositiveIndex(nums);
  const firstNegativeIdx = firstNegativeIndex(nums);

  const positiveLength = firstPositiveIdx === undefined
    ? 0
    : nums.length - firstPositiveIdx;

  const negativeLength = firstNegativeIdx === undefined
    ? 0
    : firstNegativeIdx + 1;

  return Math.min(positiveLength, negativeLength);
}

function firstPositiveIndex(nums) {
  let left = 0;
  let right = nums.length - 1;
  let result

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > 0) {
      result = mid;
      right = mid - 1
    } else {
      left = mid + 1;
    }
  }

  return result;
}

function firstNegativeIndex(nums) {
  let left = 0;
  let right = nums.length - 1;
  let result

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < 0) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}


console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);

// All test cases should log true.