/*
The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as 
credit card numbers and Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit, which is usually appended to a partial number 
to generate the full number. This number must pass the following test:

Counting from the rightmost digit and moving left, double the value of every second digit
For any digit that thus become 10 or more, subtract 9 from the result
1111 becomes 2121
8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
Add all these digits together
1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the 
number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, 
it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should 
treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input 
string.

Ex:
  - 1111 => 2121 
    - 2 + 1 + 2 + 1 = 6
  - 8763 => 7733 (6 x 2 = 12 => 12 - 9 = 3 and 8 x 2 = 16 => 16 - 9 = 7)
    - 7733 = 7 + 7 + 3 + 3 =  20

input:
  - String of digits
Output:
  - string number representing the checksum

Questions:
  - Will the input be a number or a string? Ill assume its a string
  - If the input is not a string, what should be returned?
  - Will the string have other characters besides digits?
  - Should the output be a number or a string?
  - Will the input be always an even number of digits?
    - If not what should the output be?
  - What should the output be for invalid numbers?
    - output "invalid input?"
  - Will there be any number of arguments input?
  - Will the input string have any number of characters?
  
Rules:
  - Given a numeric input as a string output the numbers Luhn formula
  - The input string could have non digit characters that will be need to be sanitized
  - Starting from right to left the formula doubles ever other number, if the doubled number is 10 or greater 
    subtract 9
  - Sum all the numbers and return sum
  - If the does not end with 0 it is a invalid number.

Data Structure:
  - Split the input string into and array
  - Return a single string
  - Or return a "Invalid input" for not valid numbers

Algorithm:
  - Sanitize the input string removing all non digit characters
    - Replace all characters that are not digits 0-9 with an empty string
  - Split the input string into an array
  - reverse the array
  - Iterate over the array (map, index)
    - if index is odd (index % 2 !== 0)
      - Convert the current character into a number and  * 2
        - if current number is equal or greater then 10 subtract by 9
    - Else index is even
      - convert string character to a number
  - Sum all the numbers in the array
  - Check to see if summed number is valid
    - Covert number to a string 
      - If the last char (num[i] === 0)
        - if yes then return number
    - else return "not valid"

*/

function luhnFormula(number) {
  if (typeof number !== 'string') return 'Not Valid Input.';

  let sanitizedString = number.replace(/[^0-9]/g, '');

  if (!sanitizedString) return 'Not Valid Input.';

  let array = sanitizedString.split('').reverse();

  let doubledOdds = array.map((num, index) => {
    if (index % 2 !== 0) {
      if ((Number(num) * 2) >= 10) {
        return (Number(num) * 2) - 9;
      } else {
        return Number(num) * 2
      }
    } else {
      return Number(num)
    }
  })

  let checkSum = doubledOdds.reduce((acc, value) => acc + value);
  
  return checkSum % 10 === 0;
}

function makeValid(number) {
  if (luhnFormula(number)) {return number};

  for (let i = 0; i <= 9; i++) {
    let testString = number + String(i);
    if (luhnFormula(testString)) {
      return testString;
    }
  }
}


console.log(makeValid('2323 2005 7766 355'))
console.log(makeValid('1111'))
console.log(makeValid('2324'))



// console.log(luhnFormula('8763')) // 20
// console.log(luhnFormula('7364'))
// console.log(luhnFormula('27389'))
// console.log(luhnFormula('1111')) // Not Valid
// console.log(luhnFormula('2323 2005 7766 3554'))
// console.log(luhnFormula('2323.2005-7766E3554'))
// console.log(luhnFormula(''))
// console.log(luhnFormula([]))



