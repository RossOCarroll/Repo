// Given a sorted array in ascending order, our task is to find two numbers
// in the array that sum up to a target number, and return them.

// If you don't find a pair that adds up to the target, return null.

// The order of the output array matters, and the number that appears first
// should be the first one in the output array.

// The problem guarantees that there will be either one
// unique pair that matches the target sum or no pairs at all.

// Test Cases:


// function findPair(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length; j++) {
//       let first = arr[i];
//       let second = arr[j];

//       if (i === j) {
//         continue;
//       }

//       if (first + second === target) {
//         return [first, second]
//       }
//     }
//   }
//   return null;
// }


function findPair(arr, target) {
  let startIdx = 0;
  let endIdx = arr.length - 1;

  while (startIdx < endIdx) {
    let currentSum = arr[startIdx] + arr[endIdx];

    if (currentSum === target) {
      return [arr[startIdx], arr[endIdx]];
    } else if (currentSum < target) {
      startIdx++;
    } else {
      endIdx--;
    }
  }
  return null;
}

const nums1 = [1, 3, 6, 7, 8, 12];
const target1 = 14;
console.log(findPair(nums1, target1)); // Output: [6, 8]

const nums2 = [2, 6, 8, 10];
const target2 = 17;
console.log(findPair(nums2, target2)); // null