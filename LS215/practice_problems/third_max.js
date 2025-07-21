/*
Given an array of integers, nums, return the third largest number in the array. If the third largest number 
does not exist, return the greatest number.

You are not allowed to sort the array.

Input:
  - an array of integers
Output 
  - The third largest number in the array 

Rules:
  - If the third largest number doesnt exist return the greatest number
  - No alowed to use sort method

Questions
  - Will we receive just an array as an argument?
  - Will the argument be an array ? 
  - Will the array be empty?
  - Will the array have fewer then 3 elements?
  - Will the array contian any number of elements?
  - Will the array contian negative integers?
  - Will the array contain infinity ot -infinity?
  - Will the array contain elements other then numbers?
  - Will the array have repeated numbers?

Data structure:
  - Delete elements from the input array 1st and 2nd largest
  - 

Algorithm:
  - If the input arrays length is less then 2
    - Return the max number
  - Find the max number in the array and save it
    - Delete the max number from the array
  - Find the max number from the mutated array
    - Delete the number from the array
  - return the max number

*/

function thirdMax(arr) {
  if (arr.length <= 2) return Math.max(...arr);

  let first = Math.max(...arr);
  arr = arr.filter(n => n !== first);

  let second = Math.max(...arr);
  arr = arr.filter(n => n !== second);

  return Math.max(...arr);
}

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([5, 7, 9, 4])) // 5
console.log(thirdMax([3, 4])) // 4
console.log(thirdMax([45, 654, 233, 534])) // 223
console.log(thirdMax([563, 456])) // 563