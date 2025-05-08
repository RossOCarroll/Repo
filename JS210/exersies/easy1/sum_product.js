let rlSync = require('readline-sync');

let integer = Number(rlSync.question('Please enter an integer greater then 0: '));
let operator = rlSync.question("Please enter a 's' for sum or 'p' for product.").toLowerCase();

let numbers = [];

for (let counter = 1; counter <= integer; counter++) {
  numbers.push(counter);
}

console.log(numbers);

if (operator === 's') {
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}`);
} else if (operator === 'p') {
  let product = numbers.reduce((acc, num) => acc * num, 1);
  console.log(`The product of the integers between 1 and ${integer} is ${product}`);