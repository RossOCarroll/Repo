/*
Write a function that takes an array argument and returns a new array that contains the values from the input 
array in sorted order. The function should sort the array using the merge sort algorithm as described above. 
You may assume that every element of the array will be of the same data type—either all numbers or all strings.

Input:
  - An array of numbers
Output:
  - A new array with the numbers sorted

Requirements:
  - Given the array of numbers sort the numbers using merge sort algorithm
  - We partition the array into sub array until each array has only one element
  - We then Wor our way back flattening the array by merging and sorting them
  - The array can have an even or odd number of elements
  - The array may contian strings

Questions:
  - Will the array contian any other data types besides numbers and strings?
  - Will the input array ever be empty?

Data Structure:
  - Will the be dividing the array into sub arrays

Algorithm:
  - Partition the array into sub arrays


*/


function partitionArray(arr) {
  const mid = Math.ceil(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
}

function merge(arr1, arr2) {
  let result = [];
  let copy1 = arr1.slice();
  let copy2 = arr2.slice();

  while(copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift())
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const [left, right] = partitionArray(arr);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}


console.log(mergeSort([9, 5, 7, 1]));               // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                     // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));            // [1, 2, 4, 6, 7]
console.log(mergeSort([9, 2, 7, 6, 8, 5, 0, 1]));   // [0, 1, 2, 5, 6, 7, 8, 9]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]