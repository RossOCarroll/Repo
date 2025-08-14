/*
Preface

A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

A more detailed description of prime numbers can be found at: http://en.wikipedia.org/wiki/Prime_number

The Problem

You will need to create logic for the following two functions: isPrime(number) and getPrimes(start, finish)

isPrime(number)

Should return boolean true if prime, otherwise false

getPrimes(start, finish)

Should return a unique, sorted array of all primes in the range [start, finish] (i.e. both numbers inclusive). Note that this range can go both ways - e.g. getPrimes(10, 1) should return all primes from 1 to 10 both inclusive.

Sample Input:

isPrime(number):

isPrime(0); // === false
isPrime(1); // === false
isPrime(2); // === true
isPrime(3); // === true
isPrime(4); // === false
isPrime(5); // === true 
getPrimes(start, finish):

getPrimes(0, 0); // === []
getPrimes(0, 30); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
getPrimes(30, 0); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

Input:
  - a number
Output:
  - A boolean true if the number is a prime number false if it is not

Input:
  - 2 numbers range
Output:
  - An array of all prime numbers in that range

Requirements:
  - Create logic for the 2 functions
  - Determine if a number is a prime number num % 1 = 0 and num % num === 0
  - Make a range and add ever prime number to an array

Questions:
  - Will we always receive a positive number?
  - Will the ranges be positivve numbers?
  - 

Algorithm:
  - isPrime
    - if num less than 1 return false
    - if num = 2 return true
    - if num % 2 = 0 return false
  - loop from 3 till num incenting by 2
    - if num % index === 0) 
      - return false
  - else return true

  - get primes
    - If if start is greater then finsish
      - swap the start and finish
    - Create an array
    - Loop from start to finish
      - If the number is prime
        - Add to the array
    - return array




*/

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i < num; i += 2) {
    if (num % i === 0 ) return false;
  }
  return true;
}

function getPrimes(start, finish) {
  if (start > finish) {
    [start, finish] = [finish, start];
  }

  let result = [];

  for (let i = start; i <= finish; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }

  return result;
}

console.log(isPrime(0)); // === false
console.log(isPrime(1)); // === false
console.log(isPrime(2)); // === true
console.log(isPrime(3)); // === true
console.log(isPrime(4)); // === false
console.log(isPrime(5)); // === true 


console.log(getPrimes(0, 0)); // === []
console.log(getPrimes(0, 30)); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
console.log(getPrimes(30, 0)); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]