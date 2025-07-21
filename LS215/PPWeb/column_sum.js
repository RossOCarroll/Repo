/*
Given an array of numbers and a value for n, split the numbers into n-sized groups. If we imagine that these 
groups are stacked on top of each other (see below), return the column number that has the greatest sum. If 
two or more columns have the same sum, return the one with the smallest column number.

Example

nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
n = 4
Gives the array:

[[4, 14, 12,  7],
[14, 16, 5, 13],
[7, 16, 11, 19]]

// 1, 2, 3, 4 (column)
// 25, 46, 28, 39 (sum)
You would return 2, as the 2nd column has the greatest sum.

Input:
  - an array of numbers and n that represents how big the number groups should be
Output:
  - The sum of the greatest column

Requirements:
  - Given the array is broken up into n sized groups get the sums of all the columns
    - sums at index 0 index 1 ...
  - If 2 columns have the same sum return the smallest column number

Questions:
  - Will there always be an array input and a number input?
  - Will the array every be empty?
  - Will the array ever be sparse?
  - Will n be a negative number? or not given at all?

Data Structure:
  - Using a nested array to store the columns
  - integer as a sum
  - an array to store the integers

Algorithm:
  - Create an array columns array to hold the columns
  - Iterate over the input array
    - starting at index 0 and incrementing i by n
      - Splice the array from i to n
      - push spliced array to columns array
  - Iterate over the columns array 
    - transform each subarray into the sum
  - Take the max amount out of the sums array

*/

function colWithMaxSum(array, num) {
  let columns = [];
  let arrCopy = array.slice();

  for (let i = 0; i < array.length; i += num) {
    columns.push(arrCopy.splice(0, num));
  }

  let sums = [];

  for (let j = 0; j < num; j++) {
    let sum = 0;
    columns.forEach(row => {
      sum += row[j];
    })
    sums.push(sum);
  }

  let max = Math.max(...sums);

  return sums.indexOf(max) + 1;
}


console.log(colWithMaxSum([4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19], 4)); // 46
console.log(colWithMaxSum([7, 4, 3, 4, 5, 5, 7, 2], 2)) // 11
console.log(colWithMaxSum([4, 2, 3, 5, 7, 6, 8, 9, 6], 3)) // 23