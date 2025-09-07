/*
Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be 52;

For n = 1001, the output should be 101.

Input/Output

[input] integer n

Constraints: 10 ≤ n ≤ 1000000.

[output] an integer


Input:
  - An integer
Output:
  - Tha maximum number when you remove a digit from the input number

Requirements:
  - The number will be great or equal to 10 and less then 1000000

Questions:
  - Will we always reveive a number as an input?
  - Will the number be a negative number?
  - 

Data structure:
  - Create a max number var
  - Iterate over the digits array

Algorithm:
  - split the digits into an array
  - Create a max num var
  - Iterate over the digits
    - Slice the from 0 to index - 1 and from index to the end of the string 
      - Join the 2 together to get the number
    - If the current sum is greater then the max number
      - Save current sum as max number
  - Retrun the max sum

*/

function deleteDigit(num) {
  let digits = num.toString();
  let maxNum = -Infinity;

  for(let i = 0; i < digits.length; i++) {
    let currentNum = Number(digits.slice(0, i) + digits.slice(i + 1))

    if (currentNum > maxNum) maxNum = currentNum;
  }

  return maxNum;
}



console.log(deleteDigit(152))//),52)

console.log(deleteDigit(1001))//1),101)

console.log(deleteDigit(10))//,1)
console.log(deleteDigit(5679))//,1)