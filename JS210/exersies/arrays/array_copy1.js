let myArray = [1, 2, 3, 4];
const myOtherArray = myArray; // pointing to the same array

myArray.pop(); // destructively removes the last element in the array
console.log(myArray); // [1, 2, 3]
console.log(myOtherArray); // [1, 2, 3]

myArray = [1, 2]; // reassigns myArray
console.log(myArray); // this will log [1, 2]
console.log(myOtherArray); // this will log [1, 2, 3]