// class Cat {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   whoAmI() {
//     console.log(`My name is ${this.name}.`, `/nI am a ${this.color} cat`);
//   }
// }


// let cheddar = new Cat('Cheddar', 'ginger');
// let cheddarProto = Object.getPrototypeOf(cheddar);

// console.log(Object.getOwnPropertyNames(cheddarProto));
// cheddar.whoAmI();


// class Animal {
//   constructor(type) {
//     this.type = type;
//   }

//   eat() {
//     console.log("Iam eating")
//   }
// }

// class Cat extends Animal {
//   constructor(name, color) {
//     super();
//     this.name = name;
//     this.color = color;
//   }

//   whoAmI() {
//     console.log(`My name is ${this.name}.`, `/nI am a ${this.color} cat`);
//   }
// }

// let cheddar = new Cat('Cheddar', 'ginger');
// let cheddarProto = Object.getPrototypeOf(cheddar);
// let cheddarProto2 = Object.getPrototypeOf(cheddarProto);

// console.log(Object.getOwnPropertyNames(cheddarProto));
// // ['constructor', 'whoAmI'];

// console.log(Object.getOwnPropertyNames(cheddarProto2));
// // ['constructor', 'eat'];

// console.log(cheddarProto2 === Animal.prototype); // true

// cheddar.whoAmI();  // My name is Cheddar.
//                    // I am a ginger cat.
// cheddar.eat();     // I am eating.


// console.log(Object.prototype);


// class Animal {};

// Animal.prototype.foo = function() {
//   console.log('this is foo');
// }

// Animal.prototype.bar = function() {
//   console.log('this is bar');
// }

// console.log(Animal.prototype);

// function Vehicle() {};

// Vehicle.prototype.drive = function() {
//   console.log('Off we go!');
// }

// console.log(Vehicle.prototype);

// let animal = new Animal();
// let vehicle = new Vehicle();

// animal.foo();     // this is foo
// animal.bar();     // this is bar
// vehicle.drive();  // off we go


// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   eat() {
//     console.log(`${this.name} is eating.`);
//   }
// }

// class Mammal extends Animal {
//   constructor(name, hasFur) {
//     super(name);
//     this.hasFur = hasFur;
//   }

//   sleep() {
//     console.log(`${this.name} is sleeping.`);
//   }
// }

// class Dog extends Mammal {
//   constructor(name, hasFur, breed) {
//     super(name, hasFur);
//     this.breed = breed;
//   }

//   bark() {
//     console.log(`${this.name} the ${this.breed} is barking.`)
//   }
// }


// let mydog = new Dog('Rex', true, 'German Shepard');
// mydog.eat();
// mydog.sleep();
// mydog.bark();

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.eat = function() {
//   console.log(`${this.name} is eating.`);
// }

// function Mammal(name, hasFur) {
//   Animal.call(this, name)
//   this.hasFur = hasFur;
// }

// Mammal.prototype = Object.create(Animal.prototype);
// Mammal.prototype.constructor = Mammal;

// Mammal.prototype.sleep = function() {
//   console.log(`${this.name} is sleeping.`);
// }

// function Dog(name, hasFur, breed) {
//   Mammal.call(this, name, hasFur)
//   this.breed = breed;
// }

// Dog.prototype = Object.create(Mammal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function() {
//   console.log(`${this.name} the ${this.breed} is barking.`)
// }


// let myDog = new Dog('Rex', true, 'German Shepard');

// console.log(myDog instanceof Dog);     // true
// console.log(myDog instanceof Mammal);  // true
// console.log(myDog instanceof Animal);  // true


// myDog.eat();
// myDog.sleep();
// myDog.bark();

// function SmartPhone(brand, model, year) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
// }

// SmartPhone.prototype.checkBattery = function() {
//   console.log(`${this.model} is at 75% battery.`);
// }

// SmartPhone.prototype.info = function() {
//   console.log(`${this.brand} ${this.model} was released in ${this.year}`);
// }

// let iphone = new SmartPhone('Apple', 'Iphone12', 2020);
// let galaxy = new SmartPhone('Samesung', 'GalaxyS21', 2021);

// iphone.checkBattery();
// galaxy.info();

function Vehicle(name) {
  this.name = name;
}

Vehicle.prototype.accelerate = function() {
  console.log(`${this.name} is accelerating.`)
}

Vehicle.prototype.decelerate = function() {
  console.log(`${this.name} is decelerating.`)
}

function Car(name) {
  Vehicle.call(this, name);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.honk = function() {
  console.log(`${this.name} is Honking.`)
}

function Boat(name) {
  Vehicle.call(this, name);
}

Boat.prototype = Object.create(Vehicle.prototype);
Boat.prototype.dropAnchor = function() {
  console.log(`${this.name} is dropping anchor.`);
}

function Airplane(name) {
  Vehicle.call(this, name);
}

Airplane.prototype = Object.create(Vehicle.prototype);
Airplane.prototype.takeOff = function() {
  console.log(`${this.name} is taking off.`)
}

Airplane.prototype.land = function() {
  console.log(`${this.name} is landing`);
}


let jeep = new Car('Jeep');

jeep.accelerate();
jeep.decelerate();
jeep.honk();

let nautique = new Boat('Nautique');

nautique.accelerate();
nautique.decelerate();
nautique.dropAnchor();

let cessna = new Airplane('Cessna');

cessna.accelerate();
cessna.decelerate();
cessna.takeOff();
cessna.land();