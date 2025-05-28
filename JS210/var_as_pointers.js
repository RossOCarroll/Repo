// let myWord = 'Hello';
// let myOtherWord = myWord;

// console.log(myWord); // 'Hello'
// console.log(myOtherWord); // 'Hello'


// let myWord = 'Hello';
// let myOtherWord = myWord;
// myWord = 'Goodbye';

// console.log(myWord);
// console.log(myOtherWord);

// // Here we have the `myWord` variable initialized and assigned to the string 'hello'. `line 2`
// // The myOtherWord is initialized is assigned to `myWord`. Even though the variables have the same value
// // they are pointing to different strings in memory. line 3 the myWord variable gets reassigned to the string
// // 'Goddbye'. The code will output 'Gooodbye' and 'Hello'. By reassigneing `myWord` we are changing what is stored
// // at the memort address `myWord` Points too.


// let myWords = ['Hello', 'Goodbye'];
// let myOtherWords = myWords;
// myWords[0] = 'Hi';

// console.log(myWords);
// console.log(myOtherWords);

// // This code will output [ 'Hi', 'Goodbye' ] twice. we initialize the myWords variable to the array [ 'Hello', 'Goodbye' ].
// // we assign the myOtherWords variable to myWords because its an object its pointing to the same object. 
// // we reassign the the value of myWords at index 0 to 'Hi'. Because both variables are pointing to the same
// // object we see that [ 'Hi', 'Goodbye' ] is oputput twice.

// let myWords = ['Hello', 'Goodbye'];
// let myOtherWords = myWords;
// myWords = ['Hi', 'Bye'];

// console.log(myWords);
// console.log(myOtherWords);

// // This code will output ['Hi', 'Bye'] and ['Hello', 'Goodbye']. On line 3 we are reassigning the myWords array
// // so that it references a different object. 

// let myWords = ['Hello', 'Goodbye'];
// let myWord = myWords[0];
// myWords[0] = 'Hi';

// console.log(myWords);
// console.log(myWord);

// // This code will output ['Hi', Goodbye'] and hello. We initialize the myWord variable and assign it to the value
// // of myWords at index 0 which is 'Hello'. We then reassgin the value at index 0 to 'hi'.

let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords);
console.log(myWord);

// This will output ['Hi', 'Goodbye'] and 'Hello'. This is because we assgin the value of myWords at index 0 to
// the value of myWord which is 'Hi'. We then reassign myWord to 'Hello'.
