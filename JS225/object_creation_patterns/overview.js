// Factory functions

// function makeAnimal(sound) {
//   return {
//     sound: sound,
//     makeNoise() {
//       console.log(this.sound)
//     }
//   }
// }

// let cat = makeAnimal('Meow'); // no line between the object and the function factory
// cat.makeNoise();

// Class syntax

// class Cat {
//   constructor(sound) {
//     this.sound = sound;
//   }

//   makeNoise() {
//     console.log(this.sound);
//   }
// }

// let bob = new Cat('meow');
// bob.makeNoise();


// Pseudo-classical

// function Animal(sound) {
//   this.sound = sound;
// }

// Animal.prototype.makeNoise = function() {
//   console.log(this.sound)
// }

// let dog = new Animal('Woof');
// dog.makeNoise();

// // Constructor Functions

function Animal(sound) {
  this.sound = sound;
}

Animal.prototype.makeNoise = function() {
  console.log(this.sound);
}

Object.create 