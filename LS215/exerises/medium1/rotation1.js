/*

Write a function that rotates an array by moving the first element to the end of the array. Do not modify the 
original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.

- Input:
  - an array of different data types
- Output:
  - A new array with the first element moved to the end of the array

Rules:
  - Return a new array, do not modify the input array
  - The new array should have the first element moved to the end of the array
  - If the input is not an array return undefined
  - If the input is an empty array, return an empty array
  - If no argument is given return undefined
  - If an integer is given return undefined
  

Questions:
  - Will the array be any length?
  - Will there always be one argument?

Data Structure:
  - We will be returning a new array
  - That array could contain any number of elements
  - We will return undefined for edge cases

Algorithm:
  - If the input array is not an array return undefined
  - If the input array is empty return undefined
  - If no arguments are given return undefined
  - Create a copy of the input array
  - Create a firstEle variable and save the element of the input array at index 0 (shift?)
  - Using the index array[array.length] = firstEle
  - return array

*/

function rotateArray(input) {
  if (!Array.isArray(input)) return undefined;
  if (input.length === 0) return [];
  if (input === undefined) return undefined;

  let copyOfArray = input.slice();
  let firstEle = copyOfArray.shift();
  copyOfArray[copyOfArray.length] = firstEle;

  return copyOfArray;
}




console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]