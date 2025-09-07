/*

Complete the method so that it'll find the greatest product of five consecutive digits in the given string of digits.

For example: the greatest product of five consecutive digits in the string "123834539327238239583" is 3240.

The input string always has more than five digits.

Adapted from Project Euler.

Input:
  - A string of digits
Output:
  - The biggest product od fif consecutive digits

Requirements:
  - The product is the result of multiplying numbers together
  - The input string will have more the 5 digits
  - There will be 0s in the input string

Questions:
  - Will we always recieve a string of digits?
  
Data Structure:
  - Iterate over the input array
  - Split the digits up so We can splice them

Algorithm:
  - Create a maxProduct var
  - Iterate over the input string
    - split the input string
     - Splice string by the index and 5
     - Helper get the product
    - If the product is greatrer then maxProduct 
      - reassign the max product
  - Return max product



*/

function greatestProduct(digits) {
  let maxProduct = 0;

  for (let i = 0; i < digits.length; i++) {
    let fiveDigits = digits.split('').splice(i, 5).map(digit => Number(digit));
    if (fiveDigits.length < 5) continue;

    let currentProduct = fiveDigits.reduce((acc, num) => acc * num, 1);

    if (currentProduct > maxProduct) maxProduct = currentProduct;
  }

  return maxProduct;
}


console.log(greatestProduct("123834539327238239583"))//, 3240, 'The method gave a wrong answer');
console.log(greatestProduct("92494737828244222221111111532909999"))//, 5292, 'The method gave a wrong answer');
console.log(greatestProduct("92494737828244222221111111532909999"))//, 5292);
console.log(greatestProduct("92494737828244222221111111532909999"))//, 5292);
console.log(greatestProduct("02494037820244202221011110532909999"))//, 0);