const readline = require('readline-sync');
let today = new Date();
let year = today.getFullYear();

let age = readline.question('What is your age? ');
let retireAt = readline.question('What age would you like to retire? ');

console.log(`It's ${year}. You will retire in ${(retireAt - age) + year}.`);
console.log(`You only have ${retireAt - age} to go!`);



