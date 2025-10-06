// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;

//   this.bark = function() {
//     console.log(this.weight > 20 ? 'woof' : 'yip');
//   };
// }

// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// let dexter = new Dog('Dexter', 'Rottweiler', 50);
// let biggie = new Dog('Biggie', 'Whippet', 9);

// maxi.bark(); // 'Woof!'


// Dog.myPrototype = {
//   bark() {
//     console.log(this.weight > 20 ? 'woof' : 'yip');
//   }
// };

// function Dog(name, breed, weight) {
//   Object.setPrototypeOf(this, Dog.myPrototype);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }


// let maxi = new Dog('Maxi', 'German Shepherd', 32);
// let dexter = new Dog('Dexter', 'Rottweiler', 50);
// let biggie = new Dog('Biggie', 'Whippet', 9);

// maxi.bark(); // 'Woof!'


function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
};

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'woof' : 'yip');
};


let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // 'Woof!'

if (maxi.constructor === Dog) {
  console.log("It's a dog");
} else {
  console.log("It's not a dog");
}

console.log(maxi.constructor);