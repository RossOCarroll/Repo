/*
Given an array, write a function to calculate it's depth. Assume that a normal array has a depth of 1.

Examples

depth([1, 2, 3, 4]) ➞ 1

depth([1, [2, 3, 4]]) ➞ 2

depth([1, [2, [3, 4]]]) ➞ 3

depth([1, [2, [3, [4]]]]) ➞ 4
Notes

N/A

Input:
  - An array of numbers or a possibly 
Output:
  - A integer representing how deep the array is

Requirements:
  - Calculate the arrays depth
  - Iterate through the array if the array has elment that is an array 

*/

function depth(arr) {
  let maxDepth = 1;

  arr.forEach(ele => {
    if (Array.isArray(ele)) {
      const subDepth = depth(ele) + 1;
      if (subDepth > maxDepth) {
        maxDepth = subDepth
      }
    }
  })

  return maxDepth;
}

console.log(depth([1, 2, 3, 4]))// ➞ 1

console.log(depth([1, [2, 3, 4]])) //➞ 2

console.log(depth([1, [2, [3, 4]]]))// ➞ 3

console.log(depth([1, [2, [3, [4]]]]))// ➞ 4