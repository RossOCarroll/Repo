/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
 which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

Input:
  - a integer
Output:
  - The number of times in which the number has to be muiltiplied until we get a single digit

Requirements:
  - 

Algorithm:
  - Create an counter
  - create a persistance num
  - Loop until the persisence number is the length of 1
    - Convert the input number to a string then split to an array
    - Multiply the elements array 
    - join the array and assign to the persistence number
  - return counter



*/

function persistence(num) {
  let counter = 0;
  let persistenceNum = num

  while (persistenceNum >= 10) {
    persistenceNum = String(persistenceNum).split('').reduce((acc, digit) => {
      return acc * Number(digit);
    }, 1);
    counter++;
  }

  return counter;
}


console.log(persistence(39))//3)
console.log(persistence(4))//)
console.log(persistence(25))//2)
console.log(persistence(999))//,4)
console.log(persistence(444))//,3)