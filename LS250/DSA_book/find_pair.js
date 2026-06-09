
// Given a list of numbers,
// find two numbers in the list that add up to ten
// and return them. If no such pair exists, return null.

// It is guaranteed that there is either exactly one pair of numbers
// that satisfies the condition, or no pairs at all.

/*
Problem: 
  - Input: an array of numbers
  - Output: any pair of numbers that add up to 10 / null if no pairs are found

implicit:
  - given an array of numbers that are both positive and negative

Questions:
  - Will we all ways get an input that is an array
  - Will we the input be an empty array
  - An array of other types?
  - will there be more then 1 pair in the array that sum will be equal to 10

Data structure:
  - The result should be in and array
  - Split the input array into array pairs

Algorithm:
  - findPair
    - initialized and result vairable to null
    - findAllPairs method to find every possible pair
    - iterate over every pair
      - if the sum of the pair equals to 10
        - reassign result to the pair
    - return result

    - findAllPairs
      - Create a pairs array and assign it to an empty array
      - iterate over input array idx1
        - Iterate over input array a second time idx 2
          - if the index1 === index2 
            - skip
          - take the num1 num 2 in an array and push to the pairs array
      - return pairs array


*/

// Test Cases:

function findAllPairs(arr) {
  let pairs = [];

  arr.forEach((num1, idx1) => {
    arr.forEach((num2, idx2) => {
      if (idx1 === idx2) return;
      pairs.push([num1, num2]);
    })
  })

  return pairs;
}

function findPair(arr) {
  let pairs = findAllPairs(arr)
  
  for (const pair of pairs){
    if ((pair[0] + pair[1]) === 10) {
      return pair
    }
  }

  return null;
}

console.log(findPair([2, 3, 9, 7])); // Output: [3, 7]
console.log(findPair([10, 6, -1, 2])); // null
console.log(findPair([1, 2, 5, 6])); // null
console.log(findPair([1, 3, 6, 10, 4, 5])); // [6, 4]
console.log(findPair([4, -5, 3, 15, 5])); // [-5, 15]