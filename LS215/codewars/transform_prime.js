/*

Task

Given a list of positive integers, determine the minimum non-negative integer that needs to be inserted so that the sum of all elements becomes a prime number.

Notes

The list will always have at least 2 elements.
All elements will be positive integers (n > 0).
The list may contain duplicate values.
The new sum must be the closest prime number that is greater than or equal to the current sum.
Examples

[3, 1, 2] ==> Should return 1  
Explanation: The sum is 6
The closest prime greater than or equal to 6 is 7
We need to add 1 to make the sum 7 (a prime)

[2, 12, 8, 4, 6] ==> Should return 5  
Explanation: The sum is 32
The closest prime greater than or equal to 32 is 37
We need to add 5 to make the sum 37 (a prime)

[50, 39, 49, 6, 17, 28] ==> Should return 2  
Explanation: The sum is 189
The closest prime greater than or equal to 189 is 191
We need to add 2 to make the sum 191 (a prime)


Input:
  - an array of integers
Output:
  - The number when added to array makes the sum of the array a prime number

Requirements:
  - A prim number can only be divisable by one and itself
  - There will be at least 2 elements in the array
  - The elements will be positive integers
  - The list may contain positive values
  - The new sum is the closest prime number that is greater or equal to the current sum

Questions
  - Will

Data Structure:
  - create a number to insert and loop increasing that number

Algorithm:
  - Get the sum of the input array
  - Create an insert number
  - Loop while true
    - if the number is Prime (Helper)
      - Exit loop 
    - Increment the inserted number
  - Return inserted number

*/

function isPrime(num) {
  if (num < 2 ) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function minimumNumber(nums) {
  let sum = nums.reduce((acc, num) => acc + num);
  let insertNum = 0;

  while (true) {
    if (isPrime(sum + insertNum)) {
      return insertNum;
    }
    insertNum++;
  }
}



console.log(minimumNumber([3,1,2]))//,1);
console.log(minimumNumber([5,2]))//,0);
console.log(minimumNumber([1,1,1]))//,0);
console.log(minimumNumber([2,12,8,4,6]))//,5);
console.log(minimumNumber([50,39,49,6,17,28]))//,2);