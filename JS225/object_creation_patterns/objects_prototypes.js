// let foo = {};
// let qux = Object.create(foo);
// console.log(Object.getPrototypeOf(qux) === foo);
// console.log(foo.isPrototypeOf(qux));

// let foo = {
//   a: 1, 
//   b: 2,
// }

// let bar = Object.create(foo);
// let baz = Object.create(bar);
// let qux = Object.create(baz);

// console.log(foo.isPrototypeOf(qux));

let prot = {};

let foo = Object.create(prot);
console.log(Object.getPrototypeOf(foo) === prot)
console.log(prot.isPrototypeOf(foo))

console.log(Object.prototype.isPrototypeOf(foo))