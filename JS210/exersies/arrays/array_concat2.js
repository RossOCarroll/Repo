function concat(array1, ...args) {
  let newArray = [];

  for (let index = 0; index < array1.length; index++) {
    newArray.push(array1[index]);
  }

  for (let i = 0; i < args.length; i++) {
    let currentArg = args[i];

    if (Array.isArray(currentArg)) {
      for (let index2 = 0; index2 < currentArg.length; index2++) {
        newArray.push(currentArg[index2]);
      }
    } else {
      newArray.push(currentArg);
    }

  }



  return newArray;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]