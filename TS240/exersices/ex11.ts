type Contact = {
  firstName: string;
  lastName: string;
  age?: number;
  isOnline?: boolean;
};


let bill: Contact = {
  firstName: 'Bill',
  lastName: 'Jean',
  age: 40,
  isOnline: false,
}

let jane: Contact = {
  firstName: 'jane',
  lastName: 'Doe',
}

console.log(bill, jane);

