// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings() {
//     console.log('hello, ' + this.firstName + ' ' + this.lastName);
//   },
// };

// let foo = john.greetings;
// foo();

// => hello, undefined undefined

// function repeatThreeTimes(func, context) {
//   func.call(context);
//   func.call(context);
//   func.call(context);
// }

// function foo() {
//   let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     },
//   };

//   repeatThreeTimes(john.greetings, john);
// }

// foo();

// // hello, John Doe
// // hello, John Doe
// // hello, John Doe


// function repeatThreeTimes(func) {
//   func();
//   func();
//   func();
// }

// function foo() {
//   let john = {
//     firstName: 'John',
//     lastName: 'Doe',

//     greetings() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     }
//   }

//   repeatThreeTimes(john.greetings.bind(john));
// }

// foo();

// let obj = {
//   a: 'hello',
//   b: 'world',
//   foo() {
//     function bar() {
//       console.log(this.a + ' ' + this.b);
//     }

//     bar.call(obj);
//   }
// }

// obj.foo();

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings() {
    repeatThreeTimes(function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    }.bind(this));
  },
};

john.greetings();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined 