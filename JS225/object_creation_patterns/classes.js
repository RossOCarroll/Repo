// class Point {
//   constructor(x = 0, y = 0) {
//     this.x = x;
//     this.y = y;
//   }

//   onXAxis() {
//     return this.y === 0;
//   }

//   onYAxis() {
//     return this.x === 0;
//   }

//   distanceToOrigin() {
//     return Math.sqrt((this.x * this.x) + (this.y * this.y));
//   }
// }

// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// };

// Rectangle.prototype.getArea = function() {
//   return this.width * this.length;
// }

// let rec = new Rectangle(10, 5);
// console.log(typeof Rectangle);         // function
// console.log(rec instanceof Rectangle); // true
// console.log(rec.constructor);          // [Function: Rectangle]
// console.log(rec.getArea());            // 50

// class Rectangle {
//   construction(width, length) {
//     this.width = width;
//     this.length = length;
//   }

//   getArea() {
//     return this.width * this.length;
//   }
// }

// let rec = new Rectangle(10, 5);
// console.log(typeof Rectangle);         // function
// console.log(rec instanceof Rectangle); // true
// console.log(rec.constructor);          // [Function: Rectangle]
// console.log(rec.getArea());            // 50

// function createObject(classDef) {
//   return new classDef();
// }

// class Foo {
//   sayHi() {
//     console.log('Hi');
//   }
// }

// let obj = createObject(Foo);
// obj.sayHi();

// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// };

// Rectangle.getDescription = function() {
//   return 'A rectangle is a shape with 4 sides.';
// }

// console.log(Rectangle.getDescription());


// class Rectangle {
//   construction(width, length) {
//     this.width = width;
//     this.length = length;
//   }

//   static getDescription() {
//     return 'A rectangle is a shape with 4 sides.';
//   }

//   getArea() {
//     return this.width * this.length;
//   }
// }

// console.log(Rectangle.getDescription());

// class Rectangle {

//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }

//   getArea() {
//     return this.length * this.width;
//   }

//   toString() {
//     return `[Rectangle ${this.length} x ${this.width}]`;
//   }
// }

// class Square extends Rectangle {
//   constructor(size) {
//     super(size, size);
//   }

//   toString() {
//     return `[Square] ${this.length} X ${this.width}`
//   }
// }

let Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(`My name is ${this.name}`)
  }
}

let Student = class extends Person {
  constructor(name, age, semester) {
    super(name, age);
    this.semester = semester;
  }

  enrollInCourse(courseNumber) {
    console.log(`${this.name} has enrolled in course ${courseNumber}.`);
  }
}

let student = new Student('Kim', 22, 'Fall');
student.sayName(); // logs 'My name is Kim.'
student.enrollInCourse('JS120'); // logs 'Kim has enrolled in course JS120.'