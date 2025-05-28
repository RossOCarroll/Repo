function noDups(resultArray, array) {
  for (let index = 0; index < array.length; index++) {
    if (!resultArray.includes(array[index])) {
      resultArray.push(array[index]);
    }
  }

  return resultArray;
}

function union(...args) {
  let resultArray = []
  
  args.forEach(array => noDups(resultArray, array));

  console.log(resultArray)
}




union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]