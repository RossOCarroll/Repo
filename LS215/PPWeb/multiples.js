/*
You start with an array of numbers from 1 to n. On each round i, cross out all multiples of i except i itself.
 Continue for n rounds. Return the remaining numbers.

🟩 Ends up being prime numbers.

Input:
  - A number

Output:
  - An array of numbers where after n rounds all the multiples of i and itself are crossed out

Rules:
  - Given an array from 2 to n
  - After a round
    - Iterate over each element delete all elements that arr muiltples of i but not i?
  - n will always be a positive integer greater then 1
  - For each number in the array
    - remove muiltples of i that are greater then i

Algorithm:
  - Create an array from from 2 till n
  - Start a loop from 0 till n
    - If the current element is a muiltple of i (round)
      - Remove




*/

function getNums(n) {
  let nums = [];

  for (let i = 2; i <= n; i++) {
    nums.push(i);
  }

  return nums;
}



function sieve(n) {
  let nums = getNums(n);

  for (let i = 0; i < nums.length; i++) {
    let prime = nums[i];

    nums = nums.filter(num => num % prime !== 0 || num === prime);
  }

  return nums
}

console.log(sieve(10));  // [2, 3, 5, 7]
console.log(sieve(20));  // [2, 3, 5, 7, 11, 13, 17, 19]