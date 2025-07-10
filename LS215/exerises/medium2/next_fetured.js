/*
Next Featured Number Higher than a Given Value

A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of 
its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 
97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number greater than the 
integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

Input:
  - a number
Output:
  - The next featured number

Rules:
  - A featured number is a number that is odd, a multiple of 7, and all digits are unique
  - Issue an error message if there is no next featured number

Questions:
  - Will there always be a number as an argument?
  - Will there only be on argument
  - 


Data Structure:
  - Numbers

Algorithm:
  - Start a loop from the input number to largest possible number
    - Increment the number by 1
      - Check if the number is odd
      - check if the number remainder 7 is 0
      - Check if the number has unique digits
        - turn number into a string 
        - split the string into an array
        - copt the array and remove all the duplicates
        - check if the input number and the unique string have the same lengths
      - Return the featured number
    - return message

*/

function unique(num) {
  let digits = String(num).split('');
  let unique = new Set(digits);
  return digits.length === unique.size;
}

function featured(num) {
  const MAX_FEATURED = 9876543201;
  let i = num + 1;

  while (i <= MAX_FEATURED) {
    if ((i % 2 !== 0) && (i % 7 === 0) && (unique(i))) {
      return i;
    }
    i++;
  }
  return "There is no possible number that fulfills those requirements."
}

// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."