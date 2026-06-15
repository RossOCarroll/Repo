/*
In this problem, you are provided with an ascending order array of integers, nums. Your task is to count the number of pairs in this array whose sum is greater than a given target value, target.

Constraints:

The array nums is sorted in ascending order.
No duplicate pairs should be counted. For instance, if nums contains [1, 2] and target is 2, then (1, 2) is a valid pair since 1 + 2 > 2. You shouldn't include (2, 1)

Input:
  - An array of numbers and an integer
Output:
  - An integer that represents the amount of pairs whose sum is greater then the given target

Explicit:
  - The array will be in ascending order
  - No duplicate pairs should be counted ie 1, 2 \\ 2, 1

Data structure:
  - Iterate using start end pointers

Algorithm:
  - Create a start pointer at 0
  - Create an end pointer at length of nums - 1
  - Declare a count variable
  - Loop while start is less then end
    - Get the sum of the start
    - if the sum is greater then the target
      - increment the counter by the number of elements left in the array
      - decrement the end counter
    - else 
      - increment the start counter

  - return the count



*/


function countPairs(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let count = 0;

  while (start < end) {
    let sum = nums[start] + nums[end];

    if (sum > target) {
      count += end - start;
      end--
    } else {
      start++;
    }
  }

  return count;
}


console.log(countPairs([1, 2, 3, 4, 5], 6) === 4);
// Pairs: (2, 5), (3, 4), (3, 5), (4, 5)

console.log(countPairs([1, 2, 3, 4, 5], 8) === 1);
// Pair: (4, 5)

console.log(countPairs([1, 3, 5, 7], 6) === 4);
// Pairs: (1, 7), (3, 5), (3, 7), (5, 7)

console.log(countPairs([1, 2, 3, 4], 5) === 2);
// Pairs: (2, 4), (3, 4)

console.log(countPairs([1, 2, 3, 4, 5], 10) === 0);
// No pairs