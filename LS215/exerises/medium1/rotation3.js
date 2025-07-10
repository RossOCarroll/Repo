/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit 
fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and 
rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. 
Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The 
resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You 
can (and probably should) use the rotateRightmostDigits function from the previous exercise.

Input:
  - Number
Output:
  - A number that represents the max full rotation of the input number

Rules:
  - Rotate the digits where the first element moves to the last and all the digits shift forward
    - Keep the first element in place
    - starting from the second element rotate too the back and so on
  - Drop any leading zeros

Questions:
  - Will there always be an number as an argument to the function?
  - Will there ever be zero or more then one argument?
  - Will there be negative number as inputs?

Data Structure
  - Need to convert the digits to a string
  - Cover the string into an array
  - Return a number

Algorithm:
  - Get the length of the digits
  - Create a for loop with the i = the length of the digits and decrement
    - call the rotateRightmostDigit on the input number and i as the second argument
    - Save that new digit with every rotation
  - Return the rotated digit


*/

function rotateArray(input) {
  if (!Array.isArray(input)) return undefined;
  if (input.length === 0) return [];
  if (input === undefined) return undefined;

  let copyOfArray = input.slice();
  let firstEle = copyOfArray.shift();
  copyOfArray[copyOfArray.length] = firstEle;

  return copyOfArray;
}

function rotateRightmostDigits(digits, n) {
  let array = digits.toString().split('');
  let toRotate = array.slice((array.length - n), array.length);
  let first = array.slice(0, array.length - n);

  let rotated = first.concat(rotateArray(toRotate));

  return Number(rotated.join(''));
}

function maxRotation(digits) {
  let digitLength = digits.toString().length;
  let result = digits;
  
  for (let i = digitLength; i >= 1; i--) {
    result = rotateRightmostDigits(result, i);
  }

  return result;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845