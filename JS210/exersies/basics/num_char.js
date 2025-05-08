let string = prompt("Please enter a phrase:");

let amountOfChars = string.replace(/ /g, "").length;

console.log(`There are ${amountOfChars} characters in "${string}"`);