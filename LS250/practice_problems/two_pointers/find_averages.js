// Find Average

// In this problem, you're given an array of numbers nums, and a specific integer k. Your objective is to compute the average value of each contiguous subarray of length k within the given array.

// Requirements:

// The input will be an array of numbers and an integer k.
// You need to find the average of every contiguous subarray of size k in the array.
// The output should be an array containing these averages.
// Example test cases:

/*
Input:
  - an array of numbers
  - k representing the size of each sub array
Output:
  - An array with the averages of each sub array

Problem:
  - A continuous sub array is an array with elements that are adjacent to each other
  - find the averages of each sub array 
  - put the averages into an array

Questions:
  - Will we always get an array of numbers and a integer as inputs?
  - Will the array ever be empty?

Data Structure:
  - Two pointers an anchor an runner
  - an array to store averages

Algorithm:
  - Create an empty array
  - declare a start variable at 0
  - declard and end variable at input k
  - Loop while end is less then length of nums
    - take the elements in the array from start to end
      - get the sum
      - divide by k
      - push the average to the averages array
    - increment start and end
  - return array

*/


function findAverages(nums, k) {
  let averages = [];
  let sum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    if (right >= k - 1) {
      averages.push(sum / k);
      sum -= nums[left];
      left++;
    }
  }

  return averages;
}


console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]