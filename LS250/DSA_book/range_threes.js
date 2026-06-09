// Implement a function `findRange` that takes in an array of
// integers sorted in ascending order. The function should
// return an array containing the starting and ending
// positions of the number 3 within the array. If the number 3
// is not found, return [-1, -1].

// Example:
// Input: nums = [1, 2, 3, 3, 3, 3, 3, 4, 5]
// Output: [2, 6]

// Example:
// Input: nums = [1, 2, 5, 5, 6, 9, 10]
// Output: [-1, -1]

/*

input:
  - an array of numbers in ascending order
Output:
  - An array of to elements that represent the range of 3's in the array

Explicit:
  - If the number 3 is not found then return [-1, -1];
  

Algorithm:
  - Create a left variable and assign it tp 0
  - Create a right variable and assign it to array length - 1
  - Loop while left is less then or equal to right
    - calculate the mid point
    - if left element is equal to the 3
      - We assign the element to leftMost
    - if left element is 

*/


function findRangeOfThrees(nums) {
  return [findLeftMostIndex(nums), findRightMostIndex(nums)];
}

function findLeftMostIndex(nums) {
  let left = 0;
  let right = nums.length - 1;
  let leftMost = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === 3) {
      leftMost = mid;
      right = mid - 1;
    } else if (nums[mid] < 3) {
      left = mid + 1;
    } else {
      right = mid - 1
    }
  }

  return leftMost;
}

function findRightMostIndex(nums) {
  let left = 0;
  let right = nums.length - 1;
  let rightMost = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === 3) {
      rightMost = mid;
      left = mid + 1;
    } else if (nums[mid] < 3) {
      left = mid + 1;
    } else {
      right = mid - 1
    }
  }

  return rightMost;
}


console.log(findRangeOfThrees([1, 2, 3, 3, 3, 3, 3, 4, 5])); // [2, 6]
console.log(findRangeOfThrees([1, 2, 5, 5, 6, 9, 10]));      // [-1, -1]
console.log(findRangeOfThrees([]));    