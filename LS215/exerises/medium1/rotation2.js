/*
Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the 
left, moving the first digit to the end.

Input:
  - A number or Digits
  - 'n' the number of digits from the right moving left rotate the digits, moving the first digits to the end
Output:
  - Number

Rules:
  - Return a number
  - Rotate the numbers starting from the left 'n' numbers
  - Leave the first part of the number intact
  - 

Questions:
  - Will there always be 2 arguments
  - Will the first argument always be a number? Will the second argument always be a number
  - Will the second argument ever be 0?

Data Structure:
  - Convert the number to strings
  - Convert the strings into an array
  - Return a number

Algorithm:
  - Convert the input numbers into strings then split into an array
  - Get the elements that need to be rotated
    - toRotate = array[array.length - n]
  - Get the first elements in the array 
    - array.slice(0, array length - n) 
  - Call the rotateArray function on toRotate
  - Concat the first elements and the rotated elements
  - join the array together and covert back to numbers
  - Return numbers

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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917