/*

You have an ordered array nums consisting of integers. Your task is to determine whether there are any two distinct elements in the array where one element is exactly three times the value of the other element. The time complexity of the solution should be O(N).

Restrictions:

You should not use built-in methods like filter, map, reduce, or find.
Do not use the includes method for checking existence in the array.
Avoid using indexOf or lastIndexOf.


Input:
  - An array of numbers
Output:
  - Boolean representing wether any two distinct numbers where one number is equal to 3 times as the other 
    element
  
Data structure:
  - An array
  - 2 pointer start/end strategy

Algorithm:
  - declare a anchor set to 0
  - declare an runner set to 1
  - Loop while runner is less then arr length
    - If runner < anchor * 3
      - increment the runner
    - If runner > anchor * 3
      - increment anchor
    - if runner === anchor * 3
      - return true
  - return false
*/

function checkTripleMatch(nums) {
  let anchor = 0;
  let runner = 1;

  while (runner < nums.length) {
    if (nums[runner] < nums[anchor] * 3) {
      runner++;
    } else if (nums[runner] > nums[anchor] * 3) {
      anchor++;
    } else if (nums[runner] === nums[anchor] * 3) {
      return true;
    }
  }
  return false;
}


console.log(checkTripleMatch([1, 3, 9, 28]) === true);
console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]) === true);
console.log(checkTripleMatch([0, 5, 7, 55]) === false);
console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]) === true);
console.log(checkTripleMatch([2, 6, 13, 54]) === true);
console.log(checkTripleMatch([1, 5, 17, 51]) === true);
console.log(checkTripleMatch([1, 2, 4, 8]) === false);

// All test cases should log true.