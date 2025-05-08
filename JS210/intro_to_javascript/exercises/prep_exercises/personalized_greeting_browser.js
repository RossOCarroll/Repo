function getFirstName() {
  let firstName = prompt("What is your first name?\n");
  return firstName;
}

function getLastName() {
  let lastName = prompt("What is your last name?");
  return lastName;
}

let firstName = getFirstName()
let lastName = getLastName()

console.log(`Hello, ${firstName} ${lastName}.`);