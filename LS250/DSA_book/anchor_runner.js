// Given an array of positive integers, our task is
// to move all ones to the end of the array while preserving
// the relative order of non-one elements. The goal is to solve
// this problem in linear time complexity.

// If no ones are present in the array, no changes are needed.

// Example:
// Input: nums = [1, 2, 1, 4, 8]
// Output: [2, 4, 8, 1, 1]

// function moveOnes(arr) {
//   let anchor = 0;
//   let runner = 0;

//   while (runner < arr.length) {
//     if (arr[runner] !== 1) {
//       [arr[anchor], arr[runner]] = [arr[runner], arr[anchor]];
//       anchor++
//     }
//     runner++
//   }

//   return arr;
// }


// reader Writer

function moveOnes(arr) {
  let reader = 0;
  let writer = 0;

  while (reader < arr.length) {
    if (arr[reader] !== 1) {
      arr[writer] = arr[reader];
      writer++
    }
    reader++
  }

  while (writer < arr.length) {
    arr[writer] = 1;
    writer++;
  }

  return arr;
}


const nums1 = [1, 2, 1, 4, 8];
const transformedNums1 = moveOnes(nums1);
console.log(nums1 === transformedNums1); // true
console.log(transformedNums1); // [2, 4, 8, 1, 1]

const nums2 = [3, 1, 5, 1, 1, 4, 8, 1];
const transformedNums2 = moveOnes(nums2);
console.log(nums2 === transformedNums2); // true
console.log(transformedNums2); // [3, 5, 4, 8, 1, 1, 1, 1]