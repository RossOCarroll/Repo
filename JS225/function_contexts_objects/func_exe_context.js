// function foo() {
//   return 'this here is: ' + this;
// }

// console.log(foo());                // "this here is: [object Window]"

// let object = {
//   foo() {
//     return 'this here is: ' + this;
//   },
// };

// console.log(object.foo());
// let bar = object.foo;
// console.log(bar());

// let foo = {
//   bar() {
//     return this;
//   }
// }

// console.log(foo.bar() === foo)

a = 1;

let object = {
  a: 'hello',
  b: 'world',
}

function foo() {
  return this.a;
}

console.log(foo());
console.log(foo.call(object))