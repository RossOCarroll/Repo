// let message = 'Hello from the global scope!';

// function func(message) {
//   message = 'Hello from the function scope!';
//   console.log(message);
// }

// func(message);
// console.log(message);

// // When we call the `func` function and pass in the variable `message` the `message variable gets reassigned
// // to the string value 'Hello from the function scope!', which is then logged tot he counsole on line 5
// // Line 9 we log message to the console which will output 'Hello from the global scope!'. This message referece the
// // variable in the blobal scope on line 1.

// let myObj = { message: 'Greetings from the global scope!' };

// function func(obj) {
//   obj.message = 'Greetings from the function scope!';
//   console.log(obj.message);
// }

// func(myObj);

// console.log(myObj.message);

// // when we pass the myObj object to the func function we are passing a reference to that object. When we reassgin
// // the property message in the function we are changing the object that the variable points to. When we log to the console
// // obj.message on line 20 we get 'Greetings from the function scope!'. When we log myObj.message we get the same 
// // because we changed what the object that is being referenced. This demonstarates the mutability of objects, unlike 
// // in the first problem where we are passing in a primitive value.

// let message = 'Hello from the global scope!';

// function func() {
//   message = 'Hello from the function scope!';
//   console.log(message);
// }

// func();
// console.log(message);

// Here when we call the func function with no arguments the message variable gets reassigned in the function.
// because there is no argument geven and the function has no parameters we are reassgining the message variuable
// in the outer scope.

// let a = 10;
// let obj = {
//   a
// }

// let newObj = obj;
// newObj.a += 10;

// console.log(obj.a === a);
// console.log(newObj.a === obj.a);

let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

animal = {
  name: 'Timon',
  species: 'Suricata suricatta',
};

console.log(menagerie.warthog);

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true