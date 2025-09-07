/*
Write a function that determines if an array is circular. An array is circular if its subarrays can be reordered such that each subarray's last element is equal to the next subarray's first element.

For example, the array [[1, 1, 1], [9, 2, 3, 4], [4, 1], [1, 2, 5, 7, 9]] is circular because we can re-arrange the elements to create the following array:

[[9, 2, 3, 4], [4, 1], [1, 1, 1], [1, 2, 5, 7, 9]]

Input:
  - A 2d array of numbers
Output:
  - true or false if the array is circular

Requirements:
  - An array is circular of the elements in the array have the same first and last number
  - Sub array will contain at least one element

Questions:
  - Will we get an empty array as an input
  - Will we get any input other then an array
  - Will there be negative numbers input?


Data Structure: 
  - Randomize the elements in the array
  - Check if the arr is circular

Algorithm:
  - Loop the size of the array
    -Randomize the elements in the array 
    - If the elements in the array are circular
      -Return true 
  - Return false


*/

function shuffleArr(numbers) {
  let array = [...numbers]
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function isCircularOrder(array) {
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let next = array[(i + 1) % array.length];
    if (current[current.length - 1] !== next[0]) {
      return false;
    }
  }
  return true;
}

function isCircular(array, attempts = 1000) {
  let times = 0;

  while (times < attempts) {
    let shuffled = shuffleArr(array);
    if (isCircularOrder(shuffled)) {
      return true;
    }

    times++;
  }

  return false;
}



console.log(isCircular([[9, 8], [6, 9, 1], [8, 4, 2], [1, 9], [2, 1, 6]])) // ➞ true
// Can be reordered: [[9, 8], [8, 4, 2], [2, 1, 6], [6, 9, 1], [1, 9]]

console.log(isCircular([[1, 1], [1, 2]])) // ➞ false

console.log(isCircular([[2, 1], [1, 2]])) // ➞ true

console.log(isCircular([[2, 1], [1, 2], [2, 1], [1, 3, 1], [1, 4, 4]])) // ➞ false