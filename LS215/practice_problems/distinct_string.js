/*
A distinct string is a string that is present only once in an array.

Given an array of strings, arr, and an integer, k, return the kth distinct string present in arr. If there 
are fewer than k distinct strings, return an empty string "".

Note that the result string is the one encountered earliest in the array.

input:
  - an array of strings and an integer
output:
  - the kth element in the array that only appears once

Requirements:
  - Return the kth element in the array that only apears once
  - If there are fewer then kth distinct strings return an empty string
  - Remove elements that appear more then once
  - return the kth element

Questions:
  - Will we always recieve an array and a number?
  - will the number always be greater the 0?
  - Will an empty array be input?
  - Can the array be a sparce array?
  - Will the array contian any number of elements?
  - Will the elements in the array always be 1 character long?
  - will the element always be letters?

Data structure:
  - Iterate through the input array
  - Use the second argument as a way of finding the nth element

Algorithm:
  - Create a singles array
  - Iterate over input array
    - Check to see if the current element appears more the once in the array (helper)
      - If the element does not push the element to the singles array
  - Find the element in the array where the index is k -1 (0 based indexing)

  Helper
    - Create a count variable
    - iterate through the input array
      - increment the counter if the element appears in the array
    - return counter < 2



*/

function appearsOnce(arr, target) {
  let count = 0;
  arr.forEach(element => {
    if (element === target) count++;
  })

  return count < 2;
}

function distinctString(arr, k) {
  let singles = [];

  for (let i = 0; i < arr.length; i++) {
    if (appearsOnce(arr, arr[i])) {
      singles.push(arr[i]);
    }
  }
  if (singles.length < k ) return '';

  return singles[k - 1];
}

console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
console.log(distinctString(["a", "a", "b", 'c', 'c', 'd', 'e', 'e', 'f' ], 3)) // "f"
console.log(distinctString(["a", "a", "b", "c", "c", "d", "d"], 2)) // " "
console.log(distinctString(["1", "1", "2", "3", "3", "4", "5", "5", "6"], 2)) // "4"