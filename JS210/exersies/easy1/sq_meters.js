let rlSync = require('readline-sync');

let length = parseFloat(rlSync.question('Enter the length of the room in meters: '));
let width = parseFloat(rlSync.question('Enter the width of the room in meters: '));

let area = length * width;

console.log(`The area of the room is ${area} square meters (${(area * 10.7639).toFixed(2)} square feet).`);
