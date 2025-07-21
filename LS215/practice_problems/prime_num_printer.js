/*
Write a function, primeNumberPrinter, that prints all prime numbers present as substrings in a given string.

Input:
  - a string that has a series of letters and numbers
Output:
  - An array of all the prime numbers that are present in the string

Requirements:
  - Given a string of letters and numbers, print the numbers that are prime n % 1 === 0 && n % 7 === 0
  -

Questions:
  - Will there always be a string as an argument? will there be more then one argument? muiltiple?
  - Will an empty string be an argument?
  - Are the numbers in the array consective or seperate numbers?
  - If there are no prime numbers in the string?
  - what order should the numbers be listed in the array?
  - Will the string have negative numbers?

Data Structure:
  - Split up the string into an array of numbers
  - Conver the string numbers into integers

Algorithm:
  - Create a numbers array from the input string
  - Creat a primeNumbers emoty array
  - Iterate over the the numbers array
    - If the number is prime 
      - Conver the string number into a number and add to the prime numbers array
  - return prime numbers


*/

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function primeNumberPrinter(str) {
  let numbers = str.match(/\d{1,2}/g);
  if (numbers === null) return [];

  let primes = numbers
    .map(Number)
    .filter(isPrime);

  return primes;
}

// console.log(primeNumberPrinter("a4bc2k13d")); // [2, 13]
// console.log(primeNumberPrinter("x7z3"))             // [7, 3]
// console.log(primeNumberPrinter("abc123"))           // [2, 3] — (123 → 1, 2, 3 → only 2 & 3 are prime if broken apart)
console.log(primeNumberPrinter("abcdef"))           // []
console.log(primeNumberPrinter(""))
console.log(primeNumberPrinter("2"))                // [2]
console.log(primeNumberPrinter("4"))                // [] — not prime
console.log(primeNumberPrinter("13"))               // [13]
console.log(primeNumberPrinter("123456"))           // [2, 3, 5] (depending on how numbers are split)
console.log(primeNumberPrinter("1a2b3c4d5e"))       // [2, 3, 5]
console.log(primeNumberPrinter("a0b1c"))            // [] — 0 and 1 are not prime
console.log(primeNumberPrinter("a11b13c17"))        // [11, 13, 17]
console.log(primeNumberPrinter("abc99xyz"))         // [] — 99 is not prime

