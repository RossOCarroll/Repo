// class Cat {
//   constructor(name, color, age) {
//     this.name = name;
//     this.color = color;
//     this.age = age;
//   }

//   speak() {
//     console.log(
//       `Meow. I am ${this.name}. ` +
//       `I am a ${this.age}-year-old ${this.color} cat.`
//     );
//   }
// }

// let cocoa = new Cat('Cocoa', 'black', 5);
// let leo = new Cat('Leo', 'orange', 3);

// cocoa.speak();
// leo.speak();

// console.log(cocoa);
// console.log(cocoa instanceof Cat)

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   area() {
//     return this.height * this.width;
//  }
// } 

// const myRectangle = new Rectangle(10, 5);
// console.log(myRectangle.area());

// class Square extends Rectangle {
//   constructor(side) {
//     super(side, side);
//     this.side = side;
//   }
// }

// const mySquare = new Square(6);
// console.log(myRectangle); // Rectangle { height: 10, width: 5 }
// console.log(mySquare);    // Square { height: 6, width: 6, side: 6 }

// console.log(mySquare instanceof Square);          // true
// console.log(mySquare instanceof Rectangle);       // true

// console.log(myRectangle instanceof Square);       // false
// console.log(myRectangle instanceof Rectangle);    // true

// class SmartPhone {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   checkBattery() {
//     return `This ${this.model} is at 75% battery.`;
//   }

//   info() {
//     return `This is a ${this.brand} ${this.model} from ${this.year}`;
//   }
// }

// let iphone = new SmartPhone('Apple', 'iPhone 12', 2020);
// let galaxy = new SmartPhone('Samsung', 'Galaxy S21', 2021)

// console.log(iphone.checkBattery());
// console.log(galaxy.info());

class Vehicle {
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
  }

  accelerate() {
    console.log('Accelerating');
  }

  decelerate() {
    console.log('Decelerating');
  }
}

class Car extends Vehicle {
  constructor(color, weight, licenseNum) {
    super(color, weight);
    this.licenseNum = licenseNum;
  }

  honk() {
    console.log('Honk Honk');
  }
}

class Boat extends Vehicle {
  constructor(color, weight, homePort) {
    super(color, weight);
    this.homePort = homePort;
  }

  dropAnchor() {
    console.log('Dropping Anchor');
  }
}

class Plane extends Vehicle {
  constructor(color, weight, airline) {
    super(color, weight);
    this.airline = airline;
  }

  takeOff() {
    console.log('Taking off')
  }
}

let landCruiser = new Car('Grey', 1600, '154DFG');
let masterCraft = new Boat('White', 2000, 'Honolulu');
let cessna = new Plane('Black', 40000, 'Spirit')

landCruiser.accelerate();
masterCraft.decelerate();
landCruiser.honk();
masterCraft.dropAnchor();
cessna.takeOff();

console.log(landCruiser instanceof Vehicle);
console.log(masterCraft instanceof Vehicle);
console.log(masterCraft instanceof Car);