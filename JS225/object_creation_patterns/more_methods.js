
// Object.getPrototypeOf([]) === Array.prototype;

// function NewArray() {}

// NewArray.prototype = Object.create(Object.getPrototypeOf([]))

// NewArray.prototype.first = function() {
//   return this[0];
// }

// let newArr = new NewArray();
// let oldArr = new Array();

// oldArr.push(5);
// newArr.push(5);
// oldArr.push(2);
// newArr.push(2);
// console.log(newArr.first());           // => 5
// console.log(oldArr.first);             // => undefined

// let obj = {
//   name: 'obj',
// }

// Object.defineProperties(obj, {
//   age: {
//     value: 30,
//     writable: false,
//   },
// });

// console.log(obj.age); // => 30
// obj.age = 32;         // throws an error in strict mode
// console.log(obj.age); // => 30

// function newPerson(name) {
//   return Object.defineProperties({name: name}, {
//     log: {
//       value() {
//         console.log(this.name);
//       },
//       writable: false
//     }
//   })
// }

// let me = newPerson('Shane Riley');
// me.log();     // => Shane Riley
// me.log = function() { console.log('Amanda Rose'); };
// me.log();     // => Shane Riley


let frozen = {
  integer: 4,
  string: 'String',
  array: [1, 2, 3],
  object: {
    foo: 'bar'
  },
  func() {
    console.log('I\'m frozen');
  },
};

Object.freeze(frozen);
frozen.integer = 8;
frozen.string = 'Number';
frozen.array.pop();
frozen.object.foo = 'baz';
frozen.func = function() {
  console.log('I\'m not really frozen');
};

console.log(frozen.integer);      // => 4
console.log(frozen.string);       // => String
console.log(frozen.array);        // => [1, 2]
console.log(frozen.object.foo);   // => baz
frozen.func();                    // => I'm frozen