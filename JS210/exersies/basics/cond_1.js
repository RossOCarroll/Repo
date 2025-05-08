// let myName = 'Bob';
// const saveName = myName;
// myName = 'Alice';
// console.log(myName, saveName);

// In this code line 1 the myName variable is being initiated and assigned to the 
// string `"Bob". Line 2 the contant variable `saveName` is being initialted and assinged
// The value of `.uName` variable. Line 3 the nyName variable is being reassigned to
// the string `'Alice'`. Line 4 console.log(myNme, saveName) which will output 
// `"Alice, Bob" to the console.

const myName = 'Bob';
const saveName = myName;
let newName = myName.toUpperCase();
console.log(myName, newName);

// Here we have similar code but on line 3 the method `toUpCase` is called on the 
// myName constant variable. Because we can not change contstant variable after they are 
// initialized the putput to the console will be `"Bob Bob"`. Primitave string are inmutable.
