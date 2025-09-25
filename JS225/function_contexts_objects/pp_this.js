// function whatIsMyContext() {
//   return this;
// }

// console.log(whatIsMyContext());


// function foo() {
//   function bar() {
//     function baz() {
//       console.log(this);
//     }

//     baz();
//   }

//   bar();
// }

// foo();


// let obj = {
//   count: 2,
//   method() {
//     return this.count;
//   },
// };

// console.log(obj.method());

// 'use strict';

// function foo() {
//   console.log(this.a);
// }

// let a = 2;
// foo();

// let a = 1;
// function bar() {
//   console.log(this.a);
// }

// let obj = {
//   a: 2,
//   foo: bar,
// };

// obj.foo();

// let foo = {
//   a: 1,
//   bar() {
//     console.log(this.baz());
//   },

//   baz() {
//     return this;
//   },
// };

// foo.bar();
// let qux = foo.bar;
// qux();

// let myObject = {
//   count: 1,
//   myChildObject: {
//     myMethod() {
//       return this.count;
//     },
//   },
// };

// console.log(myObject.myChildObject.myMethod.call(myObject));


// let person = {
//   firstName: 'Peter',
//   lastName: 'Parker',
//   fullName() {
//     console.log(this.firstName + ' ' + this.lastName +
//                 ' is the Amazing Spiderman!');
//   },
// };

// let whoIsSpiderman = person.fullName.bind(person);
// whoIsSpiderman();


// let computer = {
//   price: 30000,
//   shipping: 2000,
//   total() {
//     let tax = 3000;
//     let self = this;
//     function specialDiscount() {
//       if (self.price > 20000) {
//         return 1000;
//       } else {
//         return 0;
//       }
//     }

//     return this.price + this.shipping + tax - specialDiscount();
//   }
// };

// console.log(computer.total());

// let foo = function() {
//   console.log(this.message);
// };

// let message = "D'oh!";

// let ctx = {
//   message: "Don't have a cow, man"
// };

// let binded = foo.bind(ctx);
// binded();


let name = 'Bobbo';
let foo = {
  name: name,
  sayName: function() {
    console.log(this.name);
    console.log(this);
  },
};

let baz = foo.sayName;

foo.sayName();
baz();