/*
. Implement a function that takes a string containing a mathematical expression (e.g., "3 + 5 * 2") and 
returns the calculated result (you can assume only +, -, *, / operators and no parentheses).

Input:
  - A string that represents a mat equation
Output:
  - A number that represents the result of the equation

Requirements:
  - Assume that only equations are +, -, / and *
  - Always recieve a string
  - The string will not be empty
  - 

Questions:
  - Will we always receive a string as an input?
  - Will the string ever be empty?
  - Will the equation always start with a number followed by an operator and end with a number?
  - Will there by any other chars besides the operators and numbers in the string?


Data structure:
  - create a result number and iterate over the string to effect that number
  
Algorithm:
  - Create a number for result set to 0
  - remove the white spaces from the input string
  - Iterate over that string
    - create an operator
    - If the index is 0 
      - Add that current number to the result
    - If the current char is an operator
      - add that operator to operator var
    - If the current char is a number
      - if the operators is muilt , div, minus, or add
        - result += operator current number

  return result

*/

function compute(result, operator, number) {
  if (operator === '+') {
    return result + number;
  } else if (operator === '-') {
    return result - number;
  } else if (operator === '/') {
    return result / number;
  } else if (operator === '*') {
    return result * number;
  }
}


function mathExp(expression) {
  let result = Number(expression[0]);
  let operator;

  for (let i = 1; i < expression.length; i++) {
    let currentChar = expression[i];
    
    if (currentChar.match(/[+-/*]/)) {
      operator = currentChar;
    } else if (currentChar.match(/[0-9]/)) {
      result = compute(result, operator, Number(currentChar))
    }
  }
  return result;
}


console.log(mathExp('3 + 5 * 2')) // 16
console.log(mathExp('3 + 5 * 2 / 2')) // 8
console.log(mathExp('7 - 5 * 9 / 9')) // 2