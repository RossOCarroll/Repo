/*

Create a function which converts an ordered number array into a array of ranges (represented as strings). Note how some arrays have some numbers missing.

Examples

numbersToRanges([1, 2, 3, 4, 5]) ➞ ["1-5"]

numbersToRanges([3, 4, 5, 10, 11, 12]) ➞ ["3-5", "10-12"]

numbersToRanges([1, 2, 3, 4, 99, 100]) ➞ ["1-4", "99-100"]

numbersToRanges([1, 3, 4, 5, 6, 7, 8]) ➞ ["1", "3-8"]
Notes

If there are no numbers consecutive to a number in the array, represent it as only the string version of that number (see example #4).
Return an empty array if the given array is empty.

input:
  - An array of numbers
Output:
  - an array of strings tha represent ranges

Requirements:
  - A range has to be consective numbers
  - If there are no consective numbers then the range is represented by a single digit

Questions:
  - Will there always be an array input?
  - Will ther array ever be empty?
  - Will the elelments in the array be numbers?

Data structure:
  - Build a range array while iterateing over the input array

Algorithm:
  - Create a ranges array
  - Iterate over the input array
    - create a range array 
    - add the first element to the range
    - If the current element + 1 equals the next element
      - Add to the rage
    - else 
      - push the first and last number to the ranges array
      - reasign the rang array to an emoty array






*/

function numbersToRanges(arr) {
  let ranges = [];
  let range = [arr[0]];

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === arr[i - 1] + 1) {
      range[1] = arr[i];
    } else {
      ranges.push(range.length === 1 ? `${range[0]}` : `${range[0]}-${range[1]}`);
      range = [arr[i]];
    }
  }

  return ranges;

}


console.log(numbersToRanges([1, 2, 3, 4, 5])) //➞ ["1-5"]

console.log(numbersToRanges([3, 4, 5, 10, 11, 12])) //➞ ["3-5", "10-12"]

console.log(numbersToRanges([1, 2, 3, 4, 99, 100])) //➞ ["1-4", "99-100"]

console.log(numbersToRanges([1, 3, 4, 5, 6, 7, 8])) //➞ ["1", "3-8"]