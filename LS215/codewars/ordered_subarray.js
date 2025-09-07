/*
Given two arrays smarr and bigarr, we say smlst is an ordered subarray of bigarr if all the elements of 
smarr can be found in bigarr, and in the same order.

Examples:

[4, 3, 2] is an ordered subarray of [5, 4, 3, 2, 1].
[5, 3, 1] is an ordered subarray of [5, 4, 3, 2, 1].
[5, 3, 1] is not and ordered subarray of [1, 2, 3, 4, 5] since elements are not in the same - [1, 2, 3] is an 
ordered subarray of [3, 2, 1, 2, 3].
Write a function that, given arrays smarr and bigarr, decides if smarr is an ordered subarray of bigarr.


Input:
  - 2 arrays a small one and a big one
Output:
  - true or fal;se depending on if the the smaller array is an ordered sub array of the larger one

Requirements:
  - An ordered sub array has  the dame elements of the larger array byt they have to be in order
    - ex [5, 3, 1] != [1, 3, 5]
  - Iterate over the larger array get the elements that match in the larger array
  - Find out if the arrays are equal

Questions
  - Will either of the arrays be empty?
  - Will either array have negative numbers or elements other then numbers?
  - Will we always recieve 2 arrays


Data structure:
  - Create an emoty array to compare to

Algorithm:
  - Create an emoty array to append match elements to
  - Make the larger array unique
  - Iterate over large array
    - If the current element is included in the small array
      - Append to the sub array
  - Iterate over sub array and small array
    - If any elements are not equal return false
  - Return true




*/

function isOrdSub(smArr, lgArr) {
  let subArr = [];
  let smallIdx = 0;

  for (let i = 0; i < lgArr.length; i++) {
    if (smArr[smallIdx] === lgArr[i]) {
      subArr.push(lgArr[i]);
      smallIdx++;
    }
  }

  if (subArr.length !== smArr.length) return false;

  for (let i = 0; i < subArr.length; i++) {
    if (subArr[i] !== smArr[i]) return false;
  }

  return true;
}



console.log(isOrdSub([4, 3, 2], [5, 4, 3, 2, 1])) //➞ true

console.log(isOrdSub([5, 3, 1], [5, 4, 3, 2, 1])) //➞ true

console.log(isOrdSub([5, 3, 1], [1, 2, 3, 4, 5])) //➞ false

console.log(isOrdSub([1, 2, 3], [3, 2, 1, 2, 3])) //➞ true


console.log(isOrdSub([10, 20, 30], [3, 2, 1, 2, 3])) // false

console.log(isOrdSub([1, 2, 3], [1, 1, 2, 2, 3, 3, 16]))