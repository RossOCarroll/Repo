// let foo = {
//   a: 1, 
//   b: 2, 
// };

// let bar = Object.create(foo);
// let baz = Object.create(bar);

// console.log(bar.a);
// console.log(baz.a);
// console.log(baz);


// let foo = {
//   hello() {
//     return 'hello ' + this.name;
//   }
// };

// let bar = Object.create(foo);
// bar.name = 'world';
// console.log(bar.hello());
// console.log(foo.hello());

// let dog = {
//   say() {
//     console.log(this.name + ' says Woof!');
//   },

//   run() {
//     console.log(this.name + ' runs away.');
//   },
// };

// let fido = Object.create(dog);
// fido.name = 'Fido';
// fido.say = function() {
//   console.log(this.name + ' says Woof Woff!');
// }
// fido.say();

// let spot = Object.create(dog);
// spot.name = 'Spot';
// spot.say();
// spot.run();


// let foo = {
//   a: 1,
// };

// let bar = Object.create(foo);
// bar.a = 1;
// bar.b = 2;
// console.log(bar.hasOwnProperty('a'));
// console.log(Object.getOwnPropertyNames(bar));

// delete bar.a;
// console.log(bar.hasOwnProperty('a'));
// console.log(Object.getOwnPropertyNames(bar));

// function getDefiningObject(object, propKey) {
//   while (object && !object.hasOwnProperty(propKey)) {
//     object = Object.getPrototypeOf(object);
//   }

//   return object;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// let baz = Object.create(bar);
// let qux = Object.create(baz);

// bar.c = 3;

// console.log(getDefiningObject(qux, 'c') === bar);     // => true
// console.log(getDefiningObject(qux, 'e'));             // => null


// function shallowCopy(object) {
//   let result = Object.create(Object.getPrototypeOf(object));
//   let prop;

//   for (prop in object) {
//     if (object.hasOwnProperty(prop)) {
//       result[prop] = object[prop];
//     }
//   }

//   return result;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };

// let baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// baz.say();                // => c is 3
// console.log(baz.hasOwnProperty('a'));  // false
// console.log(baz.hasOwnProperty('b'));  // false
// console.log(baz.hasOwnProperty('c'));  // true

function extend(destination) {
  for (let i = 1; i < arguments.length; i++) {
    let source = arguments[i];

    for (let prop in source) {
      if (source.hasOwnProperty(prop)) {
        destination[prop] = source[prop];
      }
    }
  }

  return destination;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe