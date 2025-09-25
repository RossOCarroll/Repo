/*
Write a function which takes two integers num1 and num2 and returns 1 if there is a straight triple of a digit at any place in num1 and also a straight double of the same digit in num2.

If this isn't the case, return 0.


Input:
  - 2 numbers
Output:
  - 1 if the num1 has a triple digit and num has a double digit 0 if its not met the condidtion

Requirements:
  - We will be given 2 numbers
  - we are return a number

Questions:
  - Will we always receive 2 arguments that are numbers?
  - Will the numbers ever be < 1?
  - leading 0s?
  - Will there be large numbers

Data structure:
  - Create a boolean for triple and double
  - Turn the numbers into strings to iterate over

Algorithm:
  - Create a double and triple boolean
  - Turn the num1 into a string and iterate over 
    - If the current char is equal to the next char and the following char
      - set the triple to true 
  - Same for num2 
  - If triple and double are both truthy return 1 else return 0


*/


function tripleDouble(num1, num2) {
  let triples = [];
  let doubles = [];
  let number1 = num1.toString();
  let number2 = num2.toString();

  for (let i = 0; i < number1.length; i++) {
    let char1 = number1[i];
    if (char1 === number1[i + 1] && char1 === number1[i + 2]) {
      triples.push(Number(char1));
    }
  }

  for (let i = 0; i < number2.length; i++) {
    let char2 = number2[i];
    if (char2 === number2[i + 1]) {
      doubles.push(Number(char2));
    }
  }

  for (let i = 0; i < triples.length; i++) {
    if (doubles.includes(triples[i])) {
      return 1;
    }
  }

  return 0;
}


console.log(tripleDouble(123123123, 123123))//, 0);
console.log(tripleDouble(111, 88))//, 0);
console.log(tripleDouble(111000, 100))//, 1);
console.log(tripleDouble(111888, 1188))//, 1);
console.log(tripleDouble(451999277, 41177722899))//, 1);
console.log(tripleDouble(1222345, 12345))//, 0);
console.log(tripleDouble(12345, 12345))//, 0);
console.log(tripleDouble(666789, 12345667))//, 1);
console.log(tripleDouble(10560002, 100))//, 1);
console.log(tripleDouble(1112, 122))//, 0);