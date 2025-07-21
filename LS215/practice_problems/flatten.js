/*
​ Write a function that takes a two-dimensional array as the argument and turns it into a flat array with all duplicated 
elements removed. Treat numbers and number strings (e.g., 1 and '1') as duplicates, and keep the one that comes first in the result.

Input:
  - a 2 dimentional array
Output:
  - The array flattened and only unique values added

Requirements:
  - Take the two dimentional array and add all unique elements to a new array
  - If an empty array is input return an empty array
  - Unique also means data types ie 3 and '3' are the same

Questions:
  - Will there always be an array as an input?
  - Will there always be one argument?
  - Will there be a more then a 2 dimentional array input?
  - What data types will the array have?
  - Can the sub array contain NaN values?
  - If objects are allowed would they be concidered equal if they have the same kwy value pairs?
  - can the array be sparse?
  - can the sub array be empty?

Data structure:
  - Use an empty array to append unique values too

Algorithm:
  - If an array has a length that is less then 1 return and empty array
  - Create an empty array
  - Iterate over the input array
    - Iterate over each sub array
      - If the element is a number check if it already exists in the result array
        - If it does not push the current element to the result array
      - If the current element is a string digit covert it to a number and check if it is in the result array
        - If it does not push the element to result
      - If the current element is an object 
        - check to see if it mataches any key value pair in the result array
          - If it does not append it to the result array
  - return result
*/

function objectEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;

  return keys1.every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
}

function flattenAndUnique(array) {
  if (array.length < 1) return [];
  let result = [];

  array.forEach(subarray => {
    subarray.forEach(ele => {
      if (typeof ele === 'number' && !result.includes(ele)) {
        result.push(ele);
      } else if (/\d/.test(ele)) {
        ele = Number(ele);
        if (!result.includes(ele)) result.push(ele);
      } else if (typeof ele === 'object') {
        const isDuplicate = result.some(existing =>
          typeof existing === 'object' && objectEqual(existing, ele)
        );
        if (!isDuplicate) {
          result.push(ele);
        }
      } else {
        result.push(ele);
      }
    })
  })

  return result;
}

console.log(flattenAndUnique([])); // []
console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']])); // [1, 2, 3, 4, 5, 'a']
console.log(flattenAndUnique([[4, '6', 7], [5, 6, 7]])) // [4, 6, 7, 5]
console.log(flattenAndUnique([[{a: 1}, 4], [{a: 1}, 5]])) // [{a: 1}, 4, 5]