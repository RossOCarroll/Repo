let rlSync = require('readline-sync')

function multiply(a, b) {
  let multiple = a * b;
  return multiple;
}

function getNumbers() {
  let num1 = Number(rlSync.question("Enter First Number: "))
  let num2 = Number(rlSync.question("Enter a Second Number: "))
  return [num1, num2]
}

let numbers = getNumbers()
let multiple = multiply(numbers[0], numbers[1])

console.log(`${numbers[0]} * ${numbers[1]} = ${multiple}`)