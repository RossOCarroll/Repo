let rlSync = require('readline-sync');

function getFirstName() {
  let firstName = rlSync.question("What is your first name?\n");
  return firstName;
}

function getLastName() {
  let lastName = rlSync.question("What is your last name?");
  return lastName;
}

let firstName = getFirstName()
let lastName = getLastName()

console.log(`Hello, ${firstName} ${lastName}.`);