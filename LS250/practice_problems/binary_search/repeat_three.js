/*
Given an array nums, sorted in ascending order (where elements are equal to or increase as you move through 
the array), determine if a specified number, target, appears more than three times in the array. The 
function should return true if target is found at least four times, and false otherwise.

input:
  - An array of numbers
  - A target number
Output:
  - True or false if the target number appears more then 3 time in an array

Data Structure:
  - Using a binary search
  - input array

Algorithm:
  - declare a left pointer set to 0
  - declare a right pointer ser to nums length - 1
  - declare a first occurance
  - declare a last occurance
  - loop while left is les than right
    - find mid
    - if nums[mid] === target
      - result = nums[mid]
      - right = mid - 1;
    - else if nums[mid] < target
      - left = mid + 1
    - else 
      - right = mid - 1


*/

function findFirst(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let firstOccurrence

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      firstOccurrence = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return firstOccurrence;
}

function findLast(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let lastOccurrence

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      lastOccurrence = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return lastOccurrence;
}


function isTargetFrequent(nums, target) {

  let firstOccurrence = findFirst(nums, target);
  let lastOccurrence = findLast(nums, target);

  if (firstOccurrence === undefined) return false;

  return (lastOccurrence - firstOccurrence + 1) > 3;
}


console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);

// All test cases should log true.