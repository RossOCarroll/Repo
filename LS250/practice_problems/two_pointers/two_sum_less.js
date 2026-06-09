/*
In this problem, you're given an array of integers nums and a target integer target. Your objective is to find the maximum sum that can be obtained by adding two distinct elements from the array, where this sum is less than the target.

Requirements:

The input will be an array of integers, nums, and a target integer, target.
You need to find the maximum value of nums[i] + nums[j] where i != j and nums[i] + nums[j] < target.
If no such pair exists, return -1.

Input:
  - An array of integers, target number
Output:
  - the maximum sum of any 2 numbers in the array that is less then the target number

Data structure:
  - Start - end pointer stratagy

Algorithm:
  - Sort the input array
  - Declare a start variable at 0
  - Declare and end variable at nums length - 1
  - Loop while start is less then end
    - declare a maxsum variable
    - get the sum of the pointers
      - If the sum is greater then target
        - decrement the end pointer
      - else if the sum is less then the target
        - if the max sum is less then sum 
          - assign max sum to the sum 
          - move the start pointer to the right
        - else 
          - return sum?
  - return -1
*/

function twoSumLessThanTarget(nums, target) {
  let sortedArr = nums.sort((a, b) => a - b);
  let start = 0;
  let end = nums.length - 1;
  let maxSum = -1;

  while (start < end) {
    let sum = sortedArr[start] + sortedArr[end];

    if (sum >= target) {
      end--;
    } else if (sum < target) {
      maxSum = Math.max(maxSum, sum);
      start++;
    }
  }

  return maxSum;
}


console.log(twoSumLessThanTarget([3, 1, 4], 5) === 4);
console.log(twoSumLessThanTarget([8, 2, 4, 9, 5, 10, 1, 7], 16) === 15);
console.log(twoSumLessThanTarget([5, 8, 3, 2, 1], 6) === 5);
console.log(twoSumLessThanTarget([6, 8, 10, 12], 5) === -1);
console.log(twoSumLessThanTarget([1, 2, 3, 4, 5], 100) === 9);
console.log(twoSumLessThanTarget([10, 20, 30, 40, 50], 40) === 30);
console.log(twoSumLessThanTarget([7, 4, 15, 11, 21, 9], 24) === 22);
// All test cases should log true