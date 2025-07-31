/*
Write a function that returns an array of length n where each element is the number of divisors of that index 
(starting at 1).

Ex: divisorCounts(5) → [1, 2, 2, 3, 2] (1 has 1 divisor, 2 has 2 divisors, 3 has 2, 4 has 3, 5 has 2)

🟩 Helps you find perfect squares (odd # of divisors).

Input: 
  - a number of a length of an array
Output:
  - An array with the number of divisors for that number


Rules:
  - A divisor is a number that evenly divides in to it 
  - Create an array from 1 - n
  - Find out how many divisors for each number
  
Questions
  - Will ther be a number input that is less then or equal to 0?
  - Will there always be oine argument? no arguments?

Data structure:
  - Create an array from 1-n 
  - map over that array

Algorithm:
  - Create an array from 1-n
  - Iterate over that array (map)
    - For each element in the array
      - Starting from 1 up to the current element
        - If the current number is a divisor of the current element 
          - return the count
  - return the numbers

*/
function createArr(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  return arr;
}

function countDivisors(num) {
  let count = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count.push(i);
    }
  }
  return count.length;
}

function divisors(n) {
  let nums = createArr(n);

  let divisors = nums.map(num => {
    return countDivisors(num);
  })

  return divisors;
}

console.log(divisors(5));
console.log(divisors(10));
console.log(divisors(20));