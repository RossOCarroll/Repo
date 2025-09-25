// function go() {
//   let foo = {};
//   let bar = { qux: foo};
//   foo.xyz = bar;
// }


// go();


// function makeArrayLogger(arr) {
//   return function() {
//     console.log(arr);
//   }
// }

// let logger = makeArrayLogger([1, 2, 3]);

// logger = null;

// let a = [1];

// function add(b) {
//   a = a.concat(b);
// }

// function run() {
//   let c = [2];
//   let d = add(c);
// }

// run();

// Is JavaScript a garbage-collected language, and if so, what does this entail?

// JavaScript is a garbage collection language. this means that JS runtime rather then the developer handles memory
// dealocation

// let myNum = 1;

// function foo() {
//   let myArr = ['this is an array'];
//   // what is eligible for GC here?
// }

// foo();

// // what is eligible for GC here?
// // ['this is an array] is eleigable after the foo function is run. 1 have the code is comeplete?

// // more code


function makeGreeting() {
  let foo = { greeting: 'hello' };
  return function(name) {
    foo.name = name;
    return foo;
  };
}

let greeting = makeGreeting();

// is the object eligible for GC here?
// the variable foo is eligable 

// more code