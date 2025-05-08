let rlSync = require('readline-sync');

let bill = parseFloat(rlSync.question('What is the bill? '));
let tipPercentage = parseFloat(rlSync.question('What is the tip percentage? '));
let tip = parseFloat((bill * tipPercentage) / 100);

console.log(`The tip is $${(tip).toFixed(2)}`)
console.log(`The totals is $${(bill + tip).toFixed(2)}`)