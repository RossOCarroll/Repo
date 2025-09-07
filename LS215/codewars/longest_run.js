/*
A consecutive-run is a list of adjacent, consecutive integers. This list can be either increasing or decreasing. Create a function that takes an array of numbers and returns the length of the longest consecutive-run.

To illustrate:

longestRun([1, 2, 3, 5, 6, 7, 8, 9]) ➞ 5
// Two consecutive runs: [1, 2, 3] and [5, 6, 7, 8, 9] (longest).
Examples

longestRun([1, 2, 3, 10, 11, 15]) ➞ 3
// Longest consecutive-run: [1, 2, 3].

longestRun([5, 4, 2, 1]) ➞ 2
// Longest consecutive-run: [5, 4] and [2, 1].

longestRun([3, 5, 7, 10, 15]) ➞ 1
// No consecutive runs, so we return 1.
Notes

If there aren't any consecutive runs (there is a gap between each integer), return 1.

Input:
  - an array of integers
Output:
  - An array of integers that represents the longest running sub array

Requirements:
  - The longest consecutive run is the sub array that 1, 2, 3, 4 
  - If there are not consecutive runs return 1


Algorithm:
  - Create a sub arrays var
  - Iterate through the array
    - Create a sub array variable
    - get the next and previous num
    - If the cuurent num is +/-1 the num 



*/


function longestRun(array) {
  let subArrays = [];
  let subArr = [array[0]];

  for (let i = 1; i < array.length; i++) {

    if (array[i] === array[i - 1] + 1 || array[i] === array[i - 1] - 1) {
      subArr.push(array[i]);
    } else {
      subArrays.push(subArr);
      subArr = [array[i]];
    }
  }

  if (subArr.length > 1) subArrays.push(subArr);
  let counts = subArrays.map(arr => arr.length).filter(count => count > 1);

  if (counts.length < 1) return 1;
  return Math.max(...counts);
}


console.log(longestRun([1, 2, 3, 10, 11, 15])) //➞ 3
// Longest consecutive-run: [1, 2, 3].

console.log(longestRun([5, 4, 2, 1])) //➞ 2
// Longest consecutive-run: [5, 4] and [2, 1].

console.log(longestRun([3, 5, 7, 10, 15])) //➞ 1
// No consecutive runs, so we return 1.
