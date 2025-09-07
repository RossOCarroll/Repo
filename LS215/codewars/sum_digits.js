/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Input:
  - A number
Output:
  - The digital root of that number

Requirements:
  - The digital root of a number is split a number and adding the digits together until you get to a single digit
  - 

Question:
  - Does the function have to be recursive?
  - Will we always recieve a number that is 2 digits long?
  - Will the number be greater then 0

Data structure:
  - Split the digit into an array
  - 

Algorithm:
  - Return num if its a single digit
  - Convert number into a string 
    - Split into array
      - Get sum of digits
        - Call the Function on the number


*/

function digitalRoot(num) {
  if (String(num).length < 2) return num;

  let sum = String(num).split('').reduce((acc, digit) => {
    return Number(acc) + Number(digit)
  }, 0)

  return digitalRoot(sum);
}


console.log(digitalRoot(16))//, 7)
console.log(digitalRoot(456))//, 6)
console.log(digitalRoot(16));      // 7  (1 + 6)
console.log(digitalRoot(942));     // 6  (9+4+2=15 → 1+5=6)
console.log(digitalRoot(132189));  // 6
console.log(digitalRoot(493193));  // 2