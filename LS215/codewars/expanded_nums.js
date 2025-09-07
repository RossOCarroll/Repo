/*

You will be given a number and you will need to return it as a string in Expanded Form. For example:

   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.

Input:
  - A number
Output:
  - That number in expanded form

Requirements:
  - All numbers will be whole numbers greater then 0
  - An expanded number


Algorithm:
  - conver the numbers into strings
  - Iterate over the string of numbers
    - 
*/

function expandedForm(num) {
  let digits = String(num);
  let expForm = [];

  for (let i = 0; i < digits.length; i++) {
    let exp = 10 ** (digits.length - 1 - i);
    if (digits[i] === '0') continue;

    expForm.push(digits[i] * exp);
  }

  return expForm.join(' + ');
}


console.log(expandedForm(12))//, '10 + 2');
console.log(expandedForm(42))//, '40 + 2');
console.log(expandedForm(70304))//, '70000 + 300 + 4');