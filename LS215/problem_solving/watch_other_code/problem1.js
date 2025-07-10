/*
Problem Description

Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other 
than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that 
should be ignored.

The rules are as follows:

If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.
If the phone number is more than 11 digits, assume that it is a bad number.
For bad numbers, just a return a string of 10 0s.

Input:
  - Im assuming the input will be a string of digits and possibly other characters.
Output:
  - A sanitized string with characters other than digits removed


Rules:
  - If the phone number is less than 10 digits it is invalid
  - if the number is 10 digits assume that it is good
  - If the number is 11 digits but the first number is 1 trim the number
  - If the number is 11 digits and the first number is not 1 then it is a invalid number
  - If the number is more than 11 digits its a bad number
  - If it is a invalid number return 10 0s.

Questions:
  - Will there be a data type other than a string input? If so how should I handle different data types?
  - Will there be more then one argument input?
  - Will there be an empty string input?

Data Structure:
  - Split the input string into an array of characters
  - Output a string

Algorithm:
  - Set a result variable to an empty string
  - Sanitize the input string removing special characters (Helper)
    - Iterate over the input string
      - If the current character is a digit (We can us regex to match digits)
        - append to the result variable
      - If the current character is a anything other then a digit continue
  - Determine If the string is valid (helper)
    - Check if the length of the result string is less then 10 characters
      - return 10 0s
    - If the number is 11 characters and the element at number[0] is not '1'
      - return 10 0s
    - if the number is over 11 characters 
      - return 10 0s
    - If the number is 10 characters continue
  - return result

*/

function validNumber(number) {
  if (number.length < 10) {
    return false;
  } else if (number.length === 11 && !(number[0] === '1')) {
    return false;
  } else if (number.length > 11) {
    return false;
  } else {
    return true;
  }
}

function cleanedPhoneNumbers(number) {
  if (!(typeof number === 'string')) {
    return '0000000000';
  }

  let result = number.replace(/[^0-9]/g, '');

  if (validNumber(result)) {
    if (result[0] === '1') {
      return result.slice(1);
    } else {
     return result; 
    }
    
  }

  return '0000000000';
}

console.log(cleanedPhoneNumbers('3@23$45(67)890'));
console.log(cleanedPhoneNumbers('3@23$4535345(67)890'));
console.log(cleanedPhoneNumbers('3@23$45(67)0'));
console.log(cleanedPhoneNumbers('13@23$45(67)890'));
console.log(cleanedPhoneNumbers('3234#56^78900'));
console.log(cleanedPhoneNumbers('3 23.45(67)890'));
console.log(cleanedPhoneNumbers(''));
console.log(cleanedPhoneNumbers([]));
