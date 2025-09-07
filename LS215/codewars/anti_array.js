/*
Given two arrays, return whether the two arrays are opposites of each other. That means both arrays are 
comprised only from elements a and b and the occurrences of these elements are swapped between the two 
arrays.

Examples

isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]) ➞ true

isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]) ➞ true

isAntiArray([3.14, true, 3.14], [3.14, false, 3.14]) ➞ false
Notes

Input:
  - 2 array with varying elements
Output:
  - True or false depending on if the arrays are the opposite 

Requirements:
  - Will always recieve 2 arrays

Questions:
  - Will the arrays always the same number of elements?
  - Will there always be 2 distinct elements in every truthful array?

Algorithm:
  - Identify an a and b elements in the first array
  - Create an array with the elements swaped
  - Iterate over the second array and compare the elements to the swapped array


*/


function isAntiArray(arr1, arr2) {
  let a = arr1[0];
  let b = arr1.filter(ele => ele !== a)[0];

  let swappedArr = arr1.map(ele => {
    if (ele === a) {
      return b;
    } else if (ele === b) {
      return a;
    }
  })
  console.log(swappedArr);

  for (let i = 0; i < swappedArr.length; i ++) {
    if (swappedArr[i] !== arr2[i]) {
      return false;
    }    
  }

  return true;
}


console.log(isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"]))// ➞ true

console.log(isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]))// ➞ true

console.log(isAntiArray([3.14, true, 3.14], [3.14, false, 3.14]))// ➞ false

