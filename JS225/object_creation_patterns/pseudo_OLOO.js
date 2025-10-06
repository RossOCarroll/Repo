// let pointA = {
//   x: 30,
//   y: 40,

//   onXAxis() {
//     return this.y === 0;
//   },

//   onYAxis() {
//     return this.x ===0;
//   },

//   distanceToOrigin() {
//     return Math.sqrt((this.x * this.x) + (this.y * this.y))
//   }
// };

// console.log(pointA.distanceToOrigin());
// console.log(pointA.onXAxis());
// console.log(pointA.onYAxis());

// let Point = function(x = 0, y = 0) {
//   this.x = x;
//   this.y = y;
// };

// Point.prototype.onXAxis = function() {
//   return this.y === 0;
// };

// Point.prototype.onYAxis = function() {
//   return this.x === 0;
// };

// Point.prototype.distanceToOrigin = function() {
//   return Math.sqrt((this.x * this.x) + (this.y * this.y));
// };

// let pointA = new Point(30, 40);
// let pointB = new Point(20);

// console.log(pointA instanceof Point);
// console.log(pointB instanceof Point);

// console.log(pointA.distanceToOrigin());
// console.log(pointB.onXAxis());

// let PetPrototype = {
//   sleep() {
//     console.log('I am sleeping.')
//   },

//   wake() {
//     console.log('I am awake.')
//   },

//   init(animal, name) {
//     this.animal = animal;
//     this.name = name;
//     return this
//   },
// }

let PetPrototype = function(animal, name) {
  this.animal = animal;
  this.name = name;
}

PetPrototype.prototype.sleep = function() {
  console.log('I am sleeping.');
};

PetPrototype.prototype.wake = function() {
  console.log('I am awake');
}


let pudding = new PetPrototype('Cat', 'Pudding')
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = new PetPrototype('Fish', 'Goldie')
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake