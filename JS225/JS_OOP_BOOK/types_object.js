// function Cat(name) {
//   this.name = name;

//   this.purr = function() {
//     console.log('Purr');
//   }

//   this.speak = function() {
//     console.log('meow!');
//   }
// }

// let butterscotch = new Cat("Butterscotch");
// butterscotch.purr();
// butterscotch.speak();

// let pudding = new Cat("Pudding");
// pudding.speak();
// pudding.purr();



// let student = {
//   name: 'Joanna',
//   age: '27',

//   study: function() {
//     console.log(`${student.name} is studying`);
//   },

//   pass: function() {
//     console.log(`${student.name} passed this course`)
//   },
// };

// student.study();
// student.pass();
// console.log(student.name)


// let student = {
//   name: 'Joanna',
//   age: 27,

//   study() {
//     console.log(`${this.name} is studying`);
//   },

//   pass() {
//     console.log(`${this.name} has passed this course`);
//   },
// }

// student.study();
// student.pass();

// let anotherStudent = {
//   name: 'Kim',
//   age: 30,

//   study() {
//     console.log(`${this.name} is studying`);
//   },

//   pass() {
//     console.log(`${this.name} has passed this course`)
//   },
// };

// anotherStudent.study();  // Kim is studying
// anotherStudent.pass();   // Kim has passed this course

let Cat = {
  purr() {
    console.log("Purr");
  },

  eat() {
    console.log('I am eating..');
  },
}

let cheddar  = Object.assign({}, Cat);
let cocoa = Object.assign({}, Cat);

cheddar.name = 'Cheddar';
cheddar.color = 'orange';
cheddar.gender = 'male';

cocoa.name = 'Cocoa';
cocoa.color = 'black';
cocoa.gender = 'female';

