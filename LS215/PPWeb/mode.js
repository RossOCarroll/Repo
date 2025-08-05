/*

The mode of a group of numbers is the value (or values) that occur most often 
(values have to occur more than once). Given a sorted array of numbers, return an array of all modes 
in ascending order.

Examples

mode([4, 5, 6, 6, 6, 7, 7, 9, 10]) ➞ [6]

mode([4, 5, 5, 6, 7, 8, 8, 9, 9]) ➞ [5, 8, 9]

mode([1, 2, 2, 3, 6, 6, 7, 9]) ➞ [2, 6]
Notes

In this challenge, all group of numbers will have at least one mode.

Input:
  - An array of numbers

Output:
  - an array contianing the number that occurs the most in array

Requirements:
  - All the numbers will have a least one mode
  - If there are multiple numbers that occure more then once but the same amount return those numbers to the array
  - The returned array should be in accending order
  - There will be at least one mode in a groupe of modes

Questions:
  - Will the input array ever be empty?
  - Will the input array always have numbers as elements?
  - Will there always be an one argument? no arguments?
  - Will the element s be single digit numbers?

Data structure:
  - Create a new array to store the modes
  - An object to store the elements and how often they occur

Algorithm:
  - Create a modes array
  - Create a highest object
  - Helper: countNumbers
    - Create a count var
    - Iterate over the input array
      - If the number equals the input number 
    - return count
  - Iterate over the array
    - add to the object num and the count
  - Determine if all the counts in the object are the same
    - add to the modes array and return
  - else determine the hightest count in the object
    - Return

*/

function getCount(num, array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (num === array[i]) {
      count++;
    }
  }
  return count;
}

function mode(numbers) {
  let modes = [];
  let counts = {};

  numbers.forEach(num =>{
    let count = getCount(num, numbers);
    if (count > 1) {
      counts[num] = count;
    }
  })

  let highestMode = Math.max(...Object.values(counts));
  for (let num in counts) {
    if (counts[num] === highestMode) {
      modes.push(Number(num))
    }
  }

  return modes.sort((a, b) => a - b);
}


console.log(mode([4, 5, 6, 6, 6, 7, 7, 9, 10])) //➞ [6]
console.log(mode([4, 5, 5, 6, 7, 8, 8, 9, 9])) //➞ [5, 8, 9]
console.log(mode([1, 2, 2, 3, 6, 6, 7, 9])) //➞ [2, 6]
console.log(mode([-2, -2, 2, 3, 3])) // [-2, 3]
console.log(mode([10, 11, 13, 13, 13, 14, 15, 15])) // [13]
