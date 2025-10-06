// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function() {
//     return (this.firstName + ' ' + this.lastName).trim();
//   }
// }

// let john = new Person('John', 'Doe');
// let jane = new Person('Jane');

// console.log(john.fullName());              // "John Doe"
// console.log(jane.fullName());              // "Jane"

// console.log(john.constructor);             // function Person(..)
// console.log(jane.constructor);             // function Person(..)

// console.log(john instanceof Person);       // true
// console.log(jane instanceof Person);       // true

// function Lizard() {
//   this.scamper = function() {
//     console.log("I'm scampering!");
//   };
// }

// let lizzy = new Lizard();
// lizzy.scamper(); // ?

class Bar {  
  console.log(this instanceof Bar); 

  constructor() {
    // => true
    this.property = 'Default Value';
  }
}
// Constructor invocation
var barInstance = new Bar();  
barInstance.property; // => 'Default Value'  