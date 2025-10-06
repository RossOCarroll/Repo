const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,

  whatIsThis() {
    console.log(this);
  }
};

console.log(person.fullName);
console.log(person.whatIsThis())
