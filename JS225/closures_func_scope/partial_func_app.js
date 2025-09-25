// function add(first, second) {
//   return first + second;
// }

// function addOne(value) {
//   return add(1, value);
// }

// console.log(addOne(10));


// function primaryFunction(arg1, arg2) {
//   console.log(arg1);
//   console.log(arg2);
// }

// function generatorFunction(arg1) {
//   return function(arg2) {
//     return primaryFunction(arg1, arg2);
//   }
// }

// let applicatorFunction = generatorFunction('Hello');
// applicatorFunction(37.2);


// function makeAddN(addend) {

//   return function(number) {
//     return add(addend, number);
//   }
// }

// let add1 = makeAddN(1);
// console.log(add1(1));
// console.log(add1(41));

// let add9 = makeAddN(9);
// console.log(add9(9));

// function add(first, second) {
//   return first + second;
// }

// function repeat(count, string) {
//   let result = '';
//   for (let i = 0; i < count; i++) {
//     result += string;
//   }

//   return result;
// }

// function partial(primary, arg1) {
//   return function(arg2) {
//     return primary(arg1, arg2);
//   };
// }

// let add1 = partial(add, 1);
// console.log(add1(2));
// console.log(add1(6));

// let threeTimes = partial(repeat, 3);

// console.log(threeTimes('hello'));


function greet(greeting, name) {
  let capitalized = greeting[0].toUpperCase() + greeting.slice(1);
  console.log(capitalized + ', ' + name + '!');
}

function makeGreeting(greeting) {
  return function (name) {
    return greet(greeting, name);
  }
}

let sayHi = makeGreeting('Hi');
let sayHello = makeGreeting('Hello');

sayHello('Brandon');
sayHi('Sarah');