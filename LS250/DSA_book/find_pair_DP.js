// Given a list of numbers,
// find two numbers in the list that add up to ten
// and return them. If no such pair exists, return null.

// It is guaranteed that there is either exactly one pair of numbers
// that satisfies the condition, or no pairs at all.

// Test Cases:


// function findPair(nums) {
//   const numMap = new Map();
//   const targetNum = 10;

//   for (let i = 0; i < nums.length; i++) {
//     const complement = targetNum - nums[i];

//     if (numMap.has(complement)) {
//       return [complement, nums[i]]
//     }

//     numMap.set(nums[i], i);
//   }

//   return null;
// }

// console.log(findPair([2, 3, 9, 7])); // Output: [3, 7]
// console.log(findPair([10, 6, -1, 2])); // null
// console.log(findPair([1, 2, 5, 6])); // null
// console.log(findPair([1, 3, 6, 10, 4, 5])); // [6, 4]
// console.log(findPair([4, -5, 3, 15, 5])); // [-5, 15]


// Given an array of numbers, return its majority element.

// The majority element is the value in the array that appears
// as at least half of the elements in the array.

// It is guaranteed that only one majority element exists in the array.

/*
Input:
  - An array of numbers

Output:
  - Integer (Majority element)

Explicit:
  - The majority element is the value that appears as at least half of the elements in the array.
  - There will be only one majority element
  - array length / 2 < element count

Implicit:
 - 

Algorithm :
  - Create an object that holds each letter and the count that the number appears in the array
  - Find the index at halfway the length of array
  - CountElements
    - Create an empty object
      - Iterate over the object
        - If the object exists in counts
          - add one to the value
        - else add the element as the key and 1 as the value;
  - Find the highest count in the object and return the key

*/
// Test Cases:


function findMajority(arr) {
  const halfWay = arr.length / 2;
  const numMap = new Map();

  for (const num of arr) {
    numMap.set(num, (numMap.get(num) || 0) + 1);

    if (numMap.get(num) >= halfWay) {
      return num;
    }
  }

}

console.log(findMajority([6, 4, 4, 6, 4])=== 4);
console.log(findMajority([4, 5, 2, 5, 5, 5, 1]) === 5);
console.log(findMajority([1, 2, 1, 2, 2, 1, 2]) === 2);
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]) === 1);
console.log(findMajority([5, 5, 5]) === 5);

// All test cases should log true