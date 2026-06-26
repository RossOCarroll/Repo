/*

Given an array of integers nums, find sum of all of its elements using recursion.


input:
  - array of numbers
Output:
  - an integer that is the sum of the nums in the array

Data structure:
  - recursive function
  - array of integers

Algorithm:
  - 

*/

function sum(nums) {
  if (nums.length === 0) return 0;
  return nums[0] + sum(nums.slice(1));
}

console.log(sum([1, 2, 3]) === 6);
console.log(sum([10, 15, 20, 10, 5]) === 60);
console.log(sum([-5, -1, 5, 2, -3]) === -2);
console.log(sum([7]) === 7);
console.log(sum([]) === 0);

// All test cases should log true.