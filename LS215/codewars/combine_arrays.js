/*
Create a function that takes three arrays and returns one array where all passed arrays are combined into 
nested arrays.

These arrays should be combined based on indexes: the first nested array should contain only the items on 
index 0, the second array on index 1, and so on.

If any array contains fewer items than necessary, supplement the missing item with "*".

Examples

combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]) ➞ 
[[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]) ➞ 
[[1, 4, 7], [2, 5,  8], [3, 6, 9]]

combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"]) ➞ 
[["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]

Requirements:
  - Given the three arrays iterate through the arrays and combine the arrays by the index in each array
  - The arrays can be different sizes
  - If there is no element at index user '*'

Question:
  - Will there always be 3 arrays?
  - Will the arrays always be the size of 3?
  - Will there ever be an empty array?

Data structure:
  - Create an array of the there arrays to iterate over
  - An empty array to appened to

Algorithm:
  - Create an array with all there arrays
  - Loop over the size of the array
    - create a subArray
    - Loop over the index starting at 0
      - append to the subArray arrays[arr][index]
        - If the element is undefined append '*'
    - Append sub array to result
  - Return result

*/

function combineArrays(arr1, arr2, arr3) {
  let arrays = [arr1, arr2, arr3];
  let combineArrays = [];
  let maxLength = Math.max(...arrays.map(arr => arr.length))

  for (let i = 0; i < maxLength; i++) {
    let subArray = [];

    arrays.forEach((array, index) => {
      if (array[i] === undefined) {
        subArray.push('*');
      } else {
        subArray.push(array[i])
      }
    })
    combineArrays.push(subArray);
  }
  return combineArrays;
}


console.log(combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"]))// ➞ 
//[[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

console.log(combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]))
//[[1, 4, 7], [2, 5,  8], [3, 6, 9]]

console.log(combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"])) 
//[["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]

console.log(combineArrays(
  ["a", "b"],
  [],
  ["x", "y", "z"]
));
// [["a", "*", "x"], ["b", "*", "y"], ["*", "*", "z"]]

console.log(combineArrays(
  [],
  [],
  []
));