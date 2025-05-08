let myArray = [1, 2, 3, 4];
const myOtherArray = [];

for (let index = 0; index < myArray.length; index++) {
  myOtherArray.push(myArray[index]);
}

myArray.pop();
console.log(myArray)
console.log(myOtherArray);
