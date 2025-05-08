// let myWord = 'Hello';
// myWord.concat(' there.');

// console.log(myWord);


// line one we initializing a new variable `myWord` and assigning it to the string
// `"Hello"`. Line 2 we call the `1concat` menthod on the `myWord` variable and passing in `' there'` as an
// argument. This code will concatenate the string `there` with the `'Heloo'` and the return value will be
///  `"Hello there."`.  `concat` will return a new string with with `' there.'` appended to it. The 'Hello' string
// is a primateve value and is im,utable.

// let myWord = 'Hello';
// let new1 = myWord.repeat(3);
// console.log(myWord);
// myWord.replace('H', 'J');
// console.log(myWord);
// myWord.split(' ');
// console.log(myWord);

// console.log(new1)


// let myWords = ['Hello'];
// myWords.push('Goodbye');

// console.log(myWords);

// This will log to the console ['Hello', 'Gooodbe']. on line 2 calling the `push` method on the `myWords` variable
// will mutate the myWords object.


// let myWords = ['Hello'];
// let new1 = myWords.concat(['Goodbye']);

// console.log(myWords);
// console.log(new1);

// Here the concat methos does not mutate the caller `myWords` but will return a new 


// let myWords = ['Hello'];
// let new1 = myWords.toUpperCase();

// console.log(myWords);
// console.log(new1)

// this will return the orginal `['Hello']`  string as the `toUpperCase` method does not mutate the caller.

// let myWords = ['Hello'];
// myWords[0] = myWords[0].toUpperCase();

// console.log(myWords);

// here we are reassigning the element at index 0 with a new element that is the return value of toUpperCase.

// let myWord = 'Hello';
// let myOtherWord = myWord;
// myWord = 'Goodbye';

// console.log(myWord);
// console.log(myOtherWord);

// this will output 'GoodBye' and 'Hello` as myWord was reassigned on line 3 and myOtherWord is pointing to
// to 'Hello'

// let myWords = ['Hello', 'Goodbye'];
// let myOtherWords = myWords;
// myWords[0] = 'Hi';

// console.log(myWords);
// console.log(myOtherWords);


// This will log to the counsole ['Hi', 'Gooodbye'] as we are mutating the array object on line 3. It will also log
// log ['Hi', 'goodbye'] again because we are mutating an object that points to the value at the same space in memory.


// let myWords = ['Hello', 'Goodbye'];
// let myOtherWords = myWords;
// myWords = ['Hi', 'Bye'];

// console.log(myWords);
// console.log(myOtherWords);

// This will log to the counsole first ['Hi', 'Bye'] as we reassgined the myWords array on line 3. On line 6 [Hello, Goodbye] 
// wil be logged to the console as it still points to the array aobject Hello goodbye.

// let myWords = ['Hello', 'Goodbye'];
// let myWord = myWords[0];
// myWords[0] = 'Hi';

// console.log(myWords);
// console.log(myWord);

/// this will output Hi Goodbye then it will log hi


let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords);
console.log(myWord);

