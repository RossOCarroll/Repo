/*
Problem Description

You are given a list of numbers in a "short-hand" range where only the significant part 
of the next number is written because we know the numbers are always increasing 
(ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their 
ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits 
are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
"1-3, 1-2" --> 1, 2, 3, 11, 12
"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
"104-2" --> 104, 105, ... 112
"104-02" --> 104, 105, ... 202
"545, 64:11" --> 545, 564, 565, .. 611

Input:
  - A list of numbers in a "short-hand" range. 
Output:
  - Return a list of complete numbers.

Questions:
  - Will th input be a string? 
    - If the input should be a string what should we do with a input that is not a string?
  - Will the output be a string?
  - will it be an array of numbers?
  - Will the input have any amount of numbers?

Rules:
  - When given a rang of numbers in short hand, return the complete list of numbers
  - The short hand will have only the important digits meaning the leading digits we not be in the short hand
    representation.
  - The number will always be increasing.
  - Some inputs will have different separators for their ranges ( - : ..)
  - Comma represents numbers not ranges
  - Always get valid inputs

Data Structure:
  - Will need to turn input string into an array
  - Will need to convert string characters into numbers

Algorithm:
  - Create a result array
  - Parse the input string splitting by commas
    - Each part could be a single value or a range
  - Iterate through string parts
    - Keep track of previous number 
      - If index === 0 
        - Push string part to result array
    - Get previous digit by index - 1 from the result array
    - If the current digit is less than the previous
      - pass to nextNumber to expand it
    - If the string part contains a range
      - Split string part into array
      - Expand the range starting from first digit to last digit
    - Add consecutive numbers to the result array

    
*/

function nextNum(num, previous) {
  let currentNum = Number(num);
  let previousNum = Number(previous);

  while (currentNum <= previousNum) {
    currentNum += 10;
  }

  return currentNum;
}

function findRange(part, previous) {
  let result = [];
  let [start, end] = part.map(Number);

  let current = nextNum(start, previous);
  let target = nextNum(end, current - 1);

  for (let i = current; i <= target; i++) {
    result.push(i);
  }

  return result;
}

function completeRange(input) {
  let result = [];

  let parts = input.split(',');

  parts.forEach((part, index) => {
    part = part.trim(); // Remove spaces

    const matches = part.match(/(-|:|\.\.)/g);

    if (matches) {
      let splitPart = part.split(matches[0]);
      let range = findRange(splitPart, result[result.length - 1] || 0);
      result.push(...range);
      return; // Skip regular handling
    }

    if (index === 0) {
      result.push(Number(part));
      return;
    }

    let previous = result[result.length - 1];

    if (Number(part) <= Number(previous)) {
      result.push(nextNum(part, previous));
    } else {
      result.push(Number(part));
    }
  });

  return result;
}




console.log(completeRange("1, 3, 7, 2, 4, 1")); // 1, 3, 7, 12, 14, 21
console.log(completeRange("1-3, 1-2")); // 1, 2, 3, 11, 12
console.log(completeRange("1:5:2")); // 1, 2, 3, 4, 5, .. 12
console.log(completeRange("104-2")); // 104, 105, ... 112
console.log(completeRange("104-02"));// 104, 105, ... 202
console.log(completeRange("545, 64:11")); // 545, 564 , 565, .. 61