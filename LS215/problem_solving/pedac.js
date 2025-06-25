/*
Suppose you have an arbitrary natural number (the target) and a set of one or more additional natural numbers (the factors). Write a program that computes the sum of all numbers from 1 up to the target number that are also multiples of one of the factors. 
For instance, if the target is 20, and the factors are 3 and 5, that gives us the list of multiples 3, 5, 6, 9, 10, 12, 15, 18. The sum of these multiples is 78.
If no factors are given, use 3 and 5 as the default factors.

inputs: 
  - target number
  - a set of factors
output:
  -sum of multiples

Implicit Requirement:
  - The multiples to be summed must be unique.
  - The target value is the limit but not included in the sum.
  - No duplicate numbers.
  - All numbers are natural numbers.

Clarifying Questions:
  - Will there be a negative number input as a target?
  - How will the factors be provided to the function?
  - What happens if only one factor is provided?

Examples / Test Cases:
    Validation
    Example 1
      Inputs:
        Target number: 20
        Factors: [3, 5]
      Output
        78
    Example 2
      Inputs:
        Target number: 20
        Factors: [3]
      Output
        63
    Example 3
      Inputs:
        Target number: 20
        Factors: [5]
      Output
        30
    Example 4
      Inputs:
        Target number: 20
        Factors: []
      Output
        78
    Example 5
    Inputs:
    Target number: 1
    Factors: []
    Output
    0

Data structure:
  - For the collection of multiples we will use an array
  - 

Algorithm
- Create an empty array called multiples and assign it an empty array
- Check wether the list of factors is empty; if it is then assign the factors [3, 5]
- For every factor in the the factors list
  - Set the current_multiple to factor to keep track of the multiples of factor.
  - While current_multiples is < target
    - Append the current_multiple to multiples
    - Add factor to current_multiple
- Filter out any duplicates from multiples
- Compute sum and return

*/

function sumOfMultiples(target, factors) {
  let multiples = [];
  if (factors.length === 0) {
    factors = [3, 5];
  }

  factors.forEach(factor =>{
    let current_multiple = factor;
    while (current_multiple < target) {
      if (!multiples.includes(current_multiple)) {
       multiples.push(current_multiple); 
      }
      current_multiple += factor;
    }
  })

  return multiples.reduce((acc, value) => acc + value, 0);
}

console.log(sumOfMultiples(20, [3, 5]));  // returns 78
console.log(sumOfMultiples(20, [3]));     // returns 63
console.log(sumOfMultiples(20, [5]));     // returns 30
console.log(sumOfMultiples(20, []));      // returns 78
console.log(sumOfMultiples(1, []));       // returns 0